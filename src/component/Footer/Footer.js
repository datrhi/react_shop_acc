import React from 'react'
import './Footer.css'
export default function Footer() {
    return (
        <div>
            <div className='footer-container'>
                <div className='shop-location'>
                    <p>Địa chỉ Shop: Ngõ 59 Phạm Văn Đồng, phường Mai Dịch, quận Cầu Giấy, Hà Nội</p>
                    <p>Phone: 0977091200</p>
                </div>
                <div className='shop-statistics'>
                    <div className='total-sold'>
                        <i class="fas fa-tags"></i>
                        <div className='info-item'>
                            <p className='info-number'>999</p>
                            <p className='info-text'>Acc đã bán</p>
                        </div>
                    </div>
                    <div className='total-users'>
                        <i class="fas fa-users"></i>
                        <div className='info-item'>
                            <p className='info-number'>999</p>
                            <p className='info-text'>Khách hàng</p>
                        </div>
                    </div>
                    <div className='total-online'>
                        <i class="fas fa-signal"></i>
                        <div className='info-item'>
                            <p className='info-number'>999</p>
                            <p className='info-text'>Trực tuyến</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
