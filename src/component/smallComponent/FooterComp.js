import React from 'react';
import '../../style/footer.scss'

function FooterComp(props) {
    return (
        <div>
            <div className="footer-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-6 col-lg-3 col-md-6 col-sm-6">
                            <img src="/img/logo.png" alt=""/>
                            <div className="p-text">
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                                consequat duis enim velit mollit.
                            </div>
                        </div>
                        <div className="col-6 col-lg-3 col-md-6 col-sm-6">
                           <div className="p-title">
                               Связаться с нами
                           </div>
                            <div className="p-flex">
                                <div className="img-p">
                                    <img src="/img/sms.png" alt=""/>
                                </div>
                                <div className="p-text">
                                    info@uzecom.com
                                </div>
                            </div>
                            <div className="p-flex">
                                <div className="img-p">
                                    <img src="/img/tel.png" alt=""/>
                                </div>
                                <div className="p-text">
                                    +99890 123 45 67
                                </div>
                            </div>
                            <div className="p-flex">
                                <div className="img-p">
                                    <img src="/img/loc.png" alt=""/>
                                </div>
                                <div className="p-text">
                                    Tashkent city, Almazar district, Sebzor Ts 17/18 dacha, 194 house
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-lg-3 col-md-6 col-sm-6">
                           <div className="p-title">
                               Социальные сети
                           </div>
                           <div className="row">
                               <div className="col-4 col-md-4 col-lg-4 col-sm-4">
                                   <div className="brend-t">
                                       <img src="/img/f.png" alt=""/>
                                   </div>
                               </div>
                               <div className="col-4 col-md-4 col-lg-4 col-sm-4">
                                   <div className="brend-t">
                                       <img src="/img/ins.png" alt=""/>
                                   </div>
                               </div>
                           </div>
                        </div>
                        <div className="col-6 col-lg-3 col-md-6 col-sm-6">
                           <div className="p-title">
                               Социальные сети
                           </div>
                           <div className="row">
                               <div className="col-6 col-md-6 col-lg-6 col-sm-6">
                                   <div className="brend-t-1">
                                       <img src="/img/p-0.png" alt=""/>
                                   </div>
                               </div>
                               <div className="col-6 col-md-6 col-lg-6 col-sm-6">
                                   <div className="brend-t-1">
                                       <img src="/img/uz.png" alt=""/>
                                   </div>
                               </div>
                               <div className="col-6 col-md-6 col-lg-6 col-sm-6">
                                   <div className="brend-t-1">
                                       <img src="/img/cl.png" alt=""/>
                                   </div>
                               </div>
                               <div className="col-6 col-md-6 col-lg-6 col-sm-6">
                                   <div className="brend-t-1">
                                       <img src="/img/hu.png" alt=""/>
                                   </div>
                               </div>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FooterComp;