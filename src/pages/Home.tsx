'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaBirthdayCake, FaHeart, FaStar } from 'react-icons/fa'
import Image from '../assets/img/image.jpg'

export default function Home() {
    const [candlesLit, setCandlesLit] = useState(true)

    const toggleCandles = () => {
        setCandlesLit(!candlesLit)
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-300 to-purple-400 flex flex-col items-center justify-center p-4 text-center">
            <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-6xl font-bold text-white mb-8"
            >
                ¡Feliz Cumpleaños, Valentina!
            </motion.h1>

            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-8 rounded-lg overflow-hidden shadow-2xl"
            >
                <img
                    src={Image}
                    alt="Valentina y yo"
                    width={400}
                    height={300}
                    className="object-cover"
                />
            </motion.div>

            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative mb-8"
            >
                <FaBirthdayCake className="text-9xl md:text-[12rem] text-pink-600" />
                {[...Array(3)].map((_, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: candlesLit ? 1 : 0, y: candlesLit ? 0 : 10 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="absolute top-0 left-1/2 transform -translate-x-1/2"
                        style={{ marginTop: `-${40 + index * 20}px`, marginLeft: `${(index - 1) * 30}px` }}
                    >
                        <div className="w-2 h-8 bg-yellow-300 rounded-full" />
                        <motion.div
                            animate={{ scale: candlesLit ? [1, 1.2, 1] : 0 }}
                            transition={{ duration: 0.5, repeat: Infinity }}
                            className="w-4 h-4 bg-orange-500 rounded-full mx-auto -mt-1"
                        />
                    </motion.div>
                ))}
            </motion.div>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl md:text-2xl text-white mb-8 max-w-2xl"
            >
                Querida Valentina, en estos 23 años, quiero que sepas que eres la razón por la que sonrío cada día. Tu risa es mi alegría, y tu amor me da fuerzas. Espero que este año esté lleno de momentos increíbles, alegrías, y que logres todo lo que te propongas. Te amo más que a nada en este mundo. ¡Feliz cumple, mi amor!
            </motion.p>

            <button
                onClick={toggleCandles}
                className="bg-white text-pink-600 hover:bg-pink-100 transition-colors duration-300 text-lg py-2 px-6 rounded-full shadow-lg"
            >
                {candlesLit ? 'Apagar Velas' : 'Encender Velas'}
            </button>

            <motion.div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                {[...Array(20)].map((_, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                            opacity: 1,
                            scale: [1, 1.5, 1],
                            x: Math.random() * window.innerWidth,
                            y: Math.random() * window.innerHeight,
                        }}
                        transition={{
                            duration: 2,
                            delay: index * 0.1,
                            repeat: Infinity,
                            repeatType: 'reverse',
                        }}
                        className="absolute"
                    >
                        <FaStar className="text-yellow-200" size={Math.random() * 20 + 10} />
                    </motion.div>
                ))}
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="mt-12 flex items-center justify-center"
            >
                <FaHeart className="text-red-500 mr-2" />
                <span className="text-white text-lg">Con amor, tu novio ingeniero</span>
            </motion.div>
        </div>
    )
}