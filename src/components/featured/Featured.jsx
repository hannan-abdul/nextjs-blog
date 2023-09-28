import React from 'react';
import styles from './featured.module.css'
import Image from 'next/image';

const Featured = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                <b>Abdul Hannan</b> Discover my stories and creative ideas.
            </h1>
            <div className={styles.post}>
                <div className={styles.imgContainer}>
                    <Image className={styles.image} src='/p1.jpeg' alt='img' fill />
                </div>
                <div className={styles.textContainer}>
                    <h1 className={styles.postTitle}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    </h1>
                    <p className={styles.portDesc}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio saepe, quis asperiores quaerat vel ipsa eaque, nobis et hic provident ducimus ipsum facere quo illo deserunt. Tempora laborum unde at?</p>
                    <button className={styles.button}>Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;