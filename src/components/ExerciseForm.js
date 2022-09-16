import React from 'react'

class ExerciseForm extends React.Component {
      
    handleSubmit = (e) => {
        e.preventDefault()   // para evitar que haga reload a la pagina
        // console.log (this.state)   // ya no funciona cuando state pasa a padre
        console.log (this.props.form)
    } 
    
    render (){
        const { onCambio, form } = this.props
        return (
            <div className="container">
            <form 
                 onSubmit={this.handleSubmit}
            >
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="title" 
                        name="title"
                        onChange={onCambio} 
                        value={form.title}          
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="description" 
                        name="description"
                        onChange={onCambio}
                        value={form.description}
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="img" 
                        name="img"
                        onChange={onCambio}
                        value={form.img}
                    />
                </div>
                <div className="form-row">
                    <div className="col">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="leftColor" 
                            name="leftColor"
                            onChange={onCambio}
                            value={form.leftColor}
                        />
                    </div>
                    <div className="col">
                        <input 
                            type="text" 
                            className="form-control"
                            placeholder="rightColor" 
                            name="rightColor"
                            onChange={onCambio}
                            value={form.rightColor}
                        />    
                    </div>
                </div>
                
                <button 
                    type="submit" 
                    className="btn btn-primary float-right"
                >
                    Submit
                </button>
            </form>
            </div>
        )
    }
}
export default ExerciseForm