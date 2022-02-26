import React from 'react'
import Logo from '../../assets/img/Q-mark.svg';

const Header = () => {
    return (
        <div className='mt-2'>
            <div className='flex content-center items-center justify-center'>
                <img src={Logo} alt="logo" height="45" width="45"/>
                <h3 className='font-bold text-2xl text-white'>QuizApp</h3>
            </div>
        </div>
    )
}

export default Header