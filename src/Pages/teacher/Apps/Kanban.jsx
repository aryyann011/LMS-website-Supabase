import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { kanbanData } from '../../../data/dummy'; 

const Kanban = () => {
  const openTasks = kanbanData.filter((task) => task.Status === 'Open');
  const progressTasks = kanbanData.filter((task) => task.Status === 'InProgress');
  const doneTasks = kanbanData.filter((task) => task.Status === 'Close' || task.Status === 'Done');
  
  const initialColumns = {
    Open: openTasks,
    InProgress: progressTasks,
    Done: doneTasks
  };

  const [columns, setColumns] = useState(initialColumns);

  const onDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) return;

    const sourceColumnId = source.droppableId;
    const destColumnId = destination.droppableId;

    if (sourceColumnId === destColumnId) {
      const column = columns[sourceColumnId];
      const copiedItems = [...column]; 

      const [removedItem] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removedItem);

      setColumns({
        ...columns,
        [sourceColumnId]: copiedItems
      });

    } else {
      const sourceColumn = columns[sourceColumnId];
      const destColumn = columns[destColumnId];

      const sourceItems = [...sourceColumn];
      const destItems = [...destColumn];

      const [removedItem] = sourceItems.splice(source.index, 1);

      destItems.splice(destination.index, 0, removedItem);

      setColumns({
        ...columns,
        [sourceColumnId]: sourceItems,
        [destColumnId]: destItems
      });
    }
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white dark:bg-gray-900 rounded-3xl">
      
      <div className="mb-10">
        <p className="text-3xl font-bold text-slate-900 dark:text-white">Task Board</p>
      </div>

      <DragDropContext onDragEnd={onDragEnd}>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {Object.entries(columns).map(([columnId, tasks]) => (
            
            <Droppable key={columnId} droppableId={columnId}>
              {(provided, snapshot) => (
                <div>
                  <div className='flex p-3 mb-3 rounded-lg justify-center items-center bg-gray-200 dark:bg-gray-700'>
                    <h3 className="font-bold text-[22px] self-center text-gray-700 dark:text-gray-200 capitalize">
                      {columnId} <span className="text-[22px] font-bold">: {tasks.length}</span>
                    </h3>
                  </div>
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className={`
                      p-4 rounded-2xl min-h-125 transition-colors
                      ${snapshot.isDraggingOver ? 'bg-gray-200 dark:bg-gray-700' : 'bg-gray-100 dark:bg-gray-800'}
                    `}
                  >
                    {tasks.map((task, index) => (
                      
                      <Draggable key={task.Id} draggableId={task.Id} index={index}>
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className={`
                              p-4 mb-3 rounded-xl bg-white dark:bg-gray-700 border border-transparent
                              hover:shadow-md transition-all
                              ${snapshot.isDragging ? 'shadow-2xl ring-2 ring-blue-500 rotate-2 z-50' : 'shadow-sm'}
                            `}
                            style={provided.draggableProps.style} // REQUIRED for movement
                          >
                            <h4 className="font-semibold text-gray-800 dark:text-white mb-1">
                              {task.Title}
                            </h4>
                            <p className="text-xs text-gray-500 line-clamp-2 mb-3">
                              {task.Summary}
                            </p>
                            
                            <div className="flex justify-between items-center mt-2">
                              <span className={`
                                text-[10px] px-2 py-1 rounded-full text-white font-medium
                                ${task.Priority === 'Critical' ? 'bg-red-500' : 
                                  task.Priority === 'High' ? 'bg-orange-400' : 
                                  task.Priority === 'Normal' ? 'bg-blue-400' : 'bg-gray-400'}
                              `}>
                                {task.Priority}
                              </span>
                              <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center text-[10px] font-bold text-indigo-600">
                                {task.Assignee ? task.Assignee.charAt(0) : 'U'}
                              </div>
                            </div>
                          </div>
                        )}
                      </Draggable>

                    ))}
                    
                    {provided.placeholder}
                  </div>
                </div>
              )}
            </Droppable>
          ))}

        </div>
      </DragDropContext>
    </div>
  );
};

export default Kanban;