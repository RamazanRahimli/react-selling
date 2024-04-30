import React from 'react'
import styles from '../Section/Section.module.css'
import IMAGE from '../../assets/IMAGE/model_2_bg (1).jpg'


const Section = ({item}) => {
  return (
    <div className={styles.box}>
        <div className={styles.container}>
        <div className={styles.bottomBox}>
            <div className={styles.imgWriteBox}>
                <img src={item.image} alt="" />
                <div className={styles.writeBox}>
                    <h3>Wild West Hoodie</h3>
                    <div className={styles.likeBox}>
                        <p>H</p>
                        <p>5.0</p>
                        <p>Y</p>
                        <p>29</p>
                    </div>
                    <p>{item.title}</p>
                    <div className={styles.btnBox}>
                        <button>CARD</button>
                        <button>VIEW</button>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.bottomBox}>
            <div className={styles.imgWriteBox}>
                <img src={item.image} alt="" />
                <div className={styles.writeBox}>
                    <h3>Wild West Hoodie</h3>
                    <div className={styles.likeBox}>
                        <p>H</p>
                        <p>5.0</p>
                        <p>Y</p>
                        <p>29</p>
                    </div>
                    <p>{item.title}</p>
                    <div className={styles.btnBox}>
                        <button>CARD</button>
                        <button>VIEW</button>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.bottomBox}>
            <div className={styles.imgWriteBox}>
                <img src={item.image} alt="" />
                <div className={styles.writeBox}>
                    <h3>Wild West Hoodie</h3>
                    <div className={styles.likeBox}>
                        <p>H</p>
                        <p>5.0</p>
                        <p>Y</p>
                        <p>29</p>
                    </div>
                    <p>{item.title}</p>
                    <div className={styles.btnBox}>
                        <button className={styles.btBox}>CARD</button>
                        <button>VIEW</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Section