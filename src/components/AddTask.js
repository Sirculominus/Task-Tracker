import { useState } from 'react'
import { DatePicker } from 'react-rainbow-components';

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)
    const [description, setDescription] = useState('')
    const [date, setDate] = useState(new Date())

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text) {
            alert('Please add a task')
            return
        }

        onAdd({ text, date, reminder, description })

        setText('')
        setDay('')
        setDescription('')
        setReminder(false)
        setDate(new Date())
    }

    const convert = (str) => {
        var date = new Date(str),
          mnth = ("0" + (date.getMonth() + 1)).slice(-2),
          day = ("0" + date.getDate()).slice(-2);
        return [date.getFullYear(), mnth, day].join("-");
      }

    return (
        <>
            <form className='add-form' onSubmit={onSubmit} >
                <div className='form-control'>
                    <label>Task</label>
                    <input type='text' placeholder='Add Task' value={text} onChange={(e) => setText(e.target.value)} />
                </div>
                <div className='form-control'>
                    <label>Date</label>
                    <DatePicker
                        formatStyle='medium'
                        value={date}
                        onChange={(value) => setDate(convert(value))} />
                </div>
                <div className='form-control'>
                    <label>Description</label>
                    <input type='text' placeholder='Description' value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div className='form-control form-control-check'>
                    <label>Set Reminder</label>
                    <input type='checkbox' checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
                </div>
                <input type='submit' value='Save Task' className='btn btn-block'/>
            </form >
        </>
    )
}

export default AddTask
