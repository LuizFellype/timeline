import { useCallback, useState } from 'react';

import timelineItems from "./timelineItems.js";
import { assignLanes } from "./assignLanes.js";

import './App.css';

const allDatesRef = timelineItems.reduce((acc, item) => {
  const newDates = item.start === item.end ? [{
    refDate: item.start,
    start: item.start,
    end: item.end,
  }] : [{
    refDate: item.start,
    start: item.start,
    end: item.end,
  }, {
    refDate: item.end,
    start: item.start,
    end: item.end,
  }]

  return [...acc, ...newDates]
}, [])


const sortAllDates = allDatesRef.sort((a, b) => {
  return new Date(a.refDate) - new Date(b.refDate)
})

const GAP = 16
const COL_WIDTH = 90
function App() {
  const [timelineItemsState, setTimelineItemsState] = useState(timelineItems);
  const [isEditingId, setIsEditingId] = useState('');
  const [editableName, setEditableName] = useState('');
  const itemsInLane = assignLanes(timelineItemsState);

  const handleEditName = useCallback(() => {
    setTimelineItemsState(prev => {
      return prev.map(e => {
        if (e.id === isEditingId) {
          return {
            ...e,
            name: editableName
          }
        }
        return e
      })
    })

    setIsEditingId('')
    setEditableName('')
  }, [isEditingId, editableName])

  const handleStartEditName = (item) => () => {
    setEditableName(item.name)
    setIsEditingId(item.id)
  }

  return (
    <>

      <div className='overflow-scroll relative' >
        <div className='flex' style={{ gap: `${GAP}px` }}>

          {
            sortAllDates.map(item => {
              return (
                <div key={item.id} className='text-nowrap date'>
                  <p>{item.refDate}</p>
                </div>
              )
            })
          }
        </div>

        {
          itemsInLane.map((lane, laneIndex) => {
            return (
              <div key={`laneIndex-${laneIndex}`} className='flex' style={{
                marginTop: laneIndex * 25,

              }}>
                {lane.map(item => {
                  const startIdx = sortAllDates.findIndex(e => e.refDate === item.start)
                  const endIdx = sortAllDates.findIndex(e => e.refDate === item.end)

                  const marginLeft = (startIdx * COL_WIDTH) + (GAP * startIdx)
                  const width = ((COL_WIDTH * (endIdx - startIdx)) + (GAP * (endIdx - startIdx))) || COL_WIDTH

                  const dinamicNameWrapperStyle = isEditingId === item.id ? '' : 'name'

                  return (
                    <div key={item.id} className={`text-nowrap ${dinamicNameWrapperStyle} absolute mt-2`} style={{
                      marginLeft,
                      width
                    }}>

                      {
                        isEditingId === item.id ? (
                          <div >
                            <span>
                              <p className='text-xs'>{item.start} - {item.end}</p>
                            </span>
                            <div className='flex '>
                              <input className='text-xs' onChange={(e) => {
                                setEditableName(e.target.value)
                              }} value={editableName} autoFocus />
                              <button className='text-xs ml-1 bg-purple-300 p-1 rounded' onClick={handleEditName}>Save</button>
                            </div>
                          </div>
                        ) : <p className='text-sm pl-1 cursor-pointer overflow-auto' onClick={handleStartEditName(item)}>{item.name}</p>
                      }
                    </div>
                  )
                })}
              </div>
            )
          })
        }
      </div>

    </>

  );
}

export default App;
