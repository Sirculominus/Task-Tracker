import { useState } from 'react'
import { DateTimePicker, Input, Textarea } from 'react-rainbow-components';

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [reminder, setReminder] = useState(false)
    const [description, setDescription] = useState('')

    const onSubmit = async (e) => {
        e.preventDefault()

        if(!text) {
            alert('Please add a task')
            return
        }

        await onAdd({ text, date, reminder, description })

        setText('')
        setDescription('')
        setReminder(false)
        setDate(new Date())

    }

    const convert = (str) => {
        var date = new Date(str),
          mnth = ("0" + (date.getMonth() + 1)).slice(-2),
          day = ("0" + date.getDate()).slice(-2);
          var time = date.getHours();
          var min = ("0"+date.getMinutes()).slice(-2);
        return [date.getFullYear(), mnth, day].join("-")+" "+time+":"+min;
    }
    const [date, setDate] = useState(convert(new Date()))

    return (
        <>
            <form className='add-form' onSubmit={onSubmit} >
                <div className='form-control'>
                    <Input
                    required
                    labelAlignment="left"
                    label="Task"
                    type='text' 
                    placeholder='Add Task' 
                    value={text} 
                    onChange={(e) => setText(e.target.value)} />
                </div>
                <div className='form-control'>
                    <DateTimePicker
                        required
                        labelAlignment="left"
                        label="Date"
                        formatStyle='medium'
                        value={date}
                        hour24
                        onChange={(value) => setDate(convert(value))} />
                </div>
                <div className='form-control'>
                    <Textarea 
                    labelAlignment="left"
                    label="Description"
                    placeholder='Add Description' 
                    value={description} 
                    rows={4}
                    onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div className='form-control'>
                    <Input 
                    labelAlignment="left"
                    label="Set Reminder"
                    type='checkbox' 
                    checked={reminder} 
                    value={reminder} 
                    onChange={(e) => setReminder(e.currentTarget.checked)} />
                </div>
                <input type='submit' value='Save Task' className='btn btn-block'/>
            </form >
        </>
    )
}

export default AddTask
