import React from 'react'
import { Button } from '../../components/Common/Button'
import "./style.css"
import phone from "../../assets/phone.png"
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'

export const Hero = () => {
    return (
        <div className='hero'>
            <div className='hero-text'>
                <motion.h2
                    initial={{ opacity: 0,  y: 50 }}
                    animate={{ opacity: 1,  y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Crypto Monitoring
                    Real-Time
                
                
                </motion.h2>

               

                <motion.p
                    initial={{ opacity: 0, scale: 0.9, y: 50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                >
                    Track crypto through a public api in real time.
                    Visit the dashboard to do so!
                </motion.p>

                <motion.div
                    className='btns'
                    initial={{ opacity: 0, scale: 0.9, x: -50 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1 }}
                >
                    <Link to="/dashboard" className='link'>
                    <Button text="Dashboard" outline={false} />
                    
                    </Link>
                    <Button text="Share" outline={true} />
                </motion.div>

            </div>
            <div className='hero-img'>

                <motion.img src={phone} className='phone-img'
                    initial={{ y: -11, opacity: 0 }}
                    animate={{
                        y: 12,
                        opacity: 1,
                        transition: {
                            y: {
                                duration: 1.5,
                                repeatType: "mirror",
                                repeat: Infinity,
                            },
                            opacity: {
                                duration: 1.5,
                                delay: 1,
                            },
                        },
                    }}

                />
            </div>
            <motion.div
                className='purple-gradient1'
                initial={{ opacity: 0, x: 450 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}

            ></motion.div>
            <motion.div
                className='purple-gradient2'
                initial={{ opacity: 0, x: 450 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}

            ></motion.div>
            <motion.div
                className='purple-gradient3'
                initial={{ opacity: 0, x: 450 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}

            ></motion.div>
            <motion.div
                className='purple-gradient4'
                initial={{ opacity: 0, x: 450 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}

            ></motion.div>
           
          
        </div>
    )
}
