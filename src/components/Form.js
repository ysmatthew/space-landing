import React, {Component} from 'react';
import style from '../scss/modules/form.module.scss';
import emailjs from 'emailjs-com';

export const templateID = process.env.REACT_APP_TEMPLATE_ID;
export const userID = process.env.REACT_APP_USER_ID;

class Form extends Component {
    state = {
        name: '',
        email: '',
        website: '',
        phone: '',
      }
    handleSubmit(e) {
        e.preventDefault()
        
        const { 
            name, 
            email, 
            website, 
            phone, 
        } = this.state;

        let templateParams = {
          from_name: name,
          from_email: email,
          from_website: website,
          to_name: 'Space',
          from_phone: phone,
         }
         emailjs.send(
          'gmail',
          templateID,
           templateParams,
           userID
         )
         this.resetForm()
     }
    resetForm() {
        this.setState({
            name: '',
            email: '',
            website: '',
            phone: '',
        })
      }
    handleChange = (param, e) => {
        this.setState({ [param]: e.target.value })
      }

    render(){

        return(
           <div className={style.container}>
               <h1>Request a Free Trial</h1>
                    <form  onSubmit={this.handleSubmit.bind(this)}>
                        <label>
                            <input
                                className={style.input}
                                type="name"
                                name="name"
                                value={this.state.name}
                                onChange={this.handleChange.bind(this, 'name')}
                                placeholder="Full Name *"
                                required
                            />
                        </label>

                        <label>
                                <input
                                    className={style.input}
                                    type="email"
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.handleChange.bind(this, 'email')}
                                    placeholder="Email Address *"
                                    required
                                />
                        </label>

                        <label>
                            <input
                                className={style.input}
                                type="website"
                                name="website"
                                value={this.state.website}
                                onChange={this.handleChange.bind(this, 'website')}
                                placeholder="Website"
                            />
                        </label>
                
                        <label>
                            <input
                                className={style.input}
                                type="text"
                                name="phone"
                                value={this.state.phone}
                                onChange={this.handleChange.bind(this, 'phone')}
                                placeholder="Phone"
                            />
                        </label>

                            <button variant="primary" type="submit">
                                Submit
                            </button>
                    </form>

           </div>
        );
    }
}

export default Form;