import React from 'react'
import { MdOutlineArrowRightAlt } from 'react-icons/md'
// import { SlTrophy } from 'react-icons/sl'
import Icon from '../images/icon.jpg'

const About = () => {
  return (
    <div id='about'>
      <h2>
        Biz <span>Haqimizda</span>
      </h2>
      <div className='cont'>
        <div className='card'>
          <div className='inner-card'>
            <div className='front'>
              <img src={Icon} alt='About us' />
              <h3>Biz haqimizda</h3>
              <div className='brdr'>
                <span>Batafsil</span> <MdOutlineArrowRightAlt />
              </div>
            </div>
            <div className='back'>
              <h3>Biz haqimizda</h3>
              <p>
                Sayyohlik kompaniyamiz sizni O'zbekistonning dunyo etirofiga
                sazovor bo'lgan joylariga tashrif buyurishga taklif qiladi. Biz
                2020-yildan buyon faoliyat yuritayotgan O‘zbekistondagi yetakchi
                sayyohlik kompaniyalaridan birimiz. Biz turistik xizmatlarning
                keng spektrini taklif qilamiz. Tajribali va ijodiy jamoamiz
                mehmonlarning har qanday manfaatlarini har doim qo'llab
                quvvatlaydi.
              </p>
            </div>
          </div>
        </div>
        {/* <div className='card'>
          <div className='inner-card'>
            <div className='front'>
              <div className='icon'>
                <SlTrophy />
              </div>
              <h3>Yutuqlarimiz</h3>
              <div className='brdr'>
                <span>Batafsil</span> <MdOutlineArrowRightAlt />
              </div>
            </div>
            <div className='back'>
              <h3>Yutuqlarimiz</h3>
              <p>
                Sayyohlik kompaniyamiz sizni O'zbekistonning dunyo etirofiga
                sazovor bo'lgan joylariga tashrif buyurishga taklif qiladi. Biz
                2018-yildan buyon faoliyat yuritayotgan O‘zbekistondagi yetakchi
                sayyohlik kompaniyalaridan birimiz. Biz turistik xizmatlarning
                keng spektrini taklif qilamiz. Tajribali va ijodiy jamoamiz
                mehmonlarning har qanday manfaatlarini har doim qo'llab
                quvvatlaydi.
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default About
