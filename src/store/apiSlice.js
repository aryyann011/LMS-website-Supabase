import createApi from '@reduxjs/toolkit/query/react';
import supabaseService from "../Auth/SupabaseService";
import { supabase } from '../conf/conf';

const fakebaseQuery = () => ({
    data : {}
})

export const apiSlice = () => createApi({

    reducerPath : 'api',
    baseQuery : fakebaseQuery,

    tagTypes : ['courses'],

    endpoints : (builder) => ({
        getCourses : builder.query({
            async QueryFn(){
                try{
                    const {data, error} = await supabase.from('courses').select('*')
                    if(error) throw error
                    return {data : data};
                }
                catch(error){
                    return {error : {status : error.code, data : error.data}}
                }
            },
            providesTags : ['courses'],
        }),
    }),

});

export const {useGetCourseQuery} = apiSlice