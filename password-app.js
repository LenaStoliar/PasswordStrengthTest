import React, {useState} from 'react';

const PasswordStrengTest = () => {
 
    const [password, setPassword] = useState ('');
 
    const handleChange = (event) => {
       setPassword (event.target.value);
    };
 
    const calculatorPasswordStrength = () => {
        const passwordLength = password.length;

        if (passwordLength === 0 ){
            return 'empty';

        } else if (passwordLength < 8) {
            return 'weak';
        } else if (
            /[a-zA-Z]/.test(password) &&
            /[0-9]/.test(password) &&
            /[^a-zA-Z0-9]/.test(password)
        ){
            return 'strong';
        } else if (
            /[a-zA-Z]/.test (password)&&
            /[0-9]/.test(password)
        )
            {
            return 'medium';
        }else {
            return 'easy';
        }
        
         
       

    };
    
    const getPasswordStrengthColor = (index) => {

        const passwordStrength = calculatorPasswordStrength();

        switch (passwordStrength) {
            case 'empty':
                return 'gray';
            case 'weak':
                    return 'red';  
            case 'easy' :
                    return index <0 ? 'red':'gray';
    
            case 'medium' :
                    return index <2 ? 'yellow':'gray';

            case 'strong' :
                        return 'green';
            
            default:
                return 'gray';

        }

    };




return (
    <div>
        <label> password:
            <input type ="password" value ={password} onChange={handleChange}/>

        </label>

        <strong>   password strength: </strong>
        <div style = {{ color: getPasswordStrengthColor(0) }}>Section 1 </div>
        <div style = {{ color: getPasswordStrengthColor(1) }}>Section 2 </div>
        <div style = {{ color: getPasswordStrengthColor(2) }}>Section 3 </div>
    </div>
);
};
export default PasswordStrengTest;