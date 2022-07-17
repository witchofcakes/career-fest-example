import React from "react";

import {
    useMediaQuery
} from "react-responsive";

import {
    Element,
    Link
} from "react-scroll/modules";

import * as ReactGA from "react-ga";

import CardCompany, {
    CardCompanyMobile
} from "./card/CardCompany";

import Names from "../../configs/application/strings/landing/bcf/companies/Names";
import DescriptionsShort from "../../configs/application/strings/landing/bcf/companies/DescriptionsShort";
import DescriptionsLong from "../../configs/application/strings/landing/bcf/companies/DescriptionsLong";


const BlockCompanies = () => {
    const isTabletOrMobileDevice
        = useMediaQuery(
            {
                maxDeviceWidth: 1224
            }
        );

    if (isTabletOrMobileDevice) {
        return (
            <div>
                <div className="row margin-top-15">
                    <CardCompanyMobile
                        image={"jooble"}
                        name={Names.jooble}
                        disabled={false}
                        description={DescriptionsShort.jooble}
                        longDescription={
                            DescriptionsLong
                                .extract(
                                    "jooble",
                                    isTabletOrMobileDevice
                                )
                        }
                        // standLink={"#"}
                    />
                    <CardCompanyMobile
                        image={"aegis"}
                        name={Names.aegis}
                        disabled={false}
                        description={DescriptionsShort.aegis}
                        longDescription={
                            DescriptionsLong
                                .extract(
                                    "aegis",
                                    isTabletOrMobileDevice
                                )
                        }
                        botLink={"https://t.me/Dentsu_career_bot"}
                        // standLink={"https://youtu.be/W7ipkmhsVPM"}
                    />
                </div>
                <div className="row margin-top-15">
                    <CardCompanyMobile
                        image={"genesis"}
                        name={Names.genesis}
                        disabled={false}
                        description={DescriptionsShort.genesis}
                        longDescription={
                            DescriptionsLong
                                .extract(
                                    "genesis",
                                    isTabletOrMobileDevice
                                )
                        }
                        botLink={"https://t.me/genesis_vacancies_bot"}
                        // standLink={"https://youtu.be/W7ipkmhsVPM"}
                    />
                    <CardCompanyMobile
                        image={"jti"}
                        name={Names.jti}
                        disabled={false}
                        description={DescriptionsShort.jti}
                        longDescription={
                            DescriptionsLong
                                .extract(
                                    "jti",
                                    isTabletOrMobileDevice
                                )
                        }
                        vacancies={
                            <div>
                                <b className="h4">Актуальні можливості для студентів:</b>

                                <br/><br/>

                                <li><b>Весна 2021: Стажер міжнародної програми Make It Bright:</b></li>

                                <br/>

                                <a href="https://www.makeitbright.com/en" target="_blank">https://www.makeitbright.com/en</a>

                                <br/> <br/>

                                Make It Bright – це: <br/>
                                — Робота над власною ідеєю з надійним напарником і професійними менторами; <br/>
                                — Можливість презентувати бізнес-ідею топ-менеджменту JTI в Києві, а якщо пощастить - на Глобальному топ-менеджменту на фіналі у Женеві; <br/>
                                — Тренінги з soft skills від професіоналів JTI для команд-фіналістів; <br/>
                                — Нетворкінг з учасниками з різних країн світу; <br/>
                                — Нагорода за перемогу у вигляді 6-місячного оплачуваного стажування в одному з міжнародних офісів JTI;

                                <br/><br/>

                                Терміни проведення програми: березень - жовтень.

                                <br/><br/>

                                Відео про проект Make It Bright: <br/>

                                <a href="https://www.youtube.com/watch?time_continue=1&v=mhBoELqqE1w&feature=emb_logo" target="_blank">https://www.youtube.com/watch?time_continue=1&v=mhBoELqqE1w&feature=emb_logo</a> <br/> <br/>

                                <li><b>Червень/ грудень: сезонна практика</b></li>
                                <b>Слідкуйте за анонсами:</b> <a href="https://bit.ly/3be7RnG" target="_blank">https://bit.ly/3be7RnG</a> <br/>
                                — Для студентів 2−6 курсів <br/>
                                — Практика у різних відділах <br/>
                                — Гнучкий графік роботи: 20 год на тиждень <br/>
                                — Тривалість 3 місяці <br/>
                                — Офіційне працевлаштування та оплата праці

                                <br/> <br/>

                                <li><b>Стажування в центральному офісі в Києві:</b></li>
                                <b>Ця вакансія відкривається за бізнес-необхідністю.</b><br/>
                                <b>Слідкуйте за анонсами:</b> <a href="https://bit.ly/3be7RnG" target="_blank">https://bit.ly/3be7RnG</a> <br/>
                                — Студенти 4−6 курсів та випускники <br/>
                                — Стажування в кількох відділах <br/>
                                — Гнучкий графік роботи: від 30 годин на тиждень <br/>
                                — Тривалість 12 або 18 місяців <br/>
                                — Офіційне працевлаштування та оплата праці

                                <br/> <br/>

                                <li><b>Стажування у відділі збуту:</b></li>
                                <b>Ця вакансія відкривається за бізнес-необхідністю.</b> <br/>
                                <b>Слідкуйте за анонсами:</b> <a href="https://bit.ly/3be7RnG" target="_blank">https://bit.ly/3be7RnG</a> <br/>
                                — Студенти 4−6 курсів та випускники <br/>
                                — Стажування в різних містах України (Київ, Харків, Одеса, Дніпро, Львів, Хмельницький) <br/>
                                — Гнучкий графік роботи: від 30 год на тиждень <br/>
                                — Тривалість 9 місяців <br/>
                                — Офіційне працевлаштування та оплата праці

                                <br/><br/>

                                <li><b>Online Open Days (Онлайн дні відкритих дверей) – coming soon</b></li>
                                <b>Слідкуйте за анонсами:</b> <br/>
                                — facebook.com/jticareersukraine <br/>
                                — instagram.com/jti_ukraine

                                <br/> <br/>

                                Також ви можете підписатися на розсилку сповіщень на нашому кар’єрному сайті і миттєво дізнаватися про нові можливості, як тільки вони з‘являються: <br/>
                                <a href="https://bit.ly/3be7RnG" target="_blank">https://bit.ly/3be7RnG</a>
                            </div>
                        }
                        botLink={"https://t.me/JTI_career_bot"}
                        // standLink={"https://youtu.be/W7ipkmhsVPM"}
                    />
                </div>
                <div className="row margin-top-15">
                    <CardCompanyMobile
                        image={"intertop"}
                        name={Names.intertop}
                        disabled={false}
                        description={DescriptionsShort.intertop}
                        longDescription={
                            DescriptionsLong
                                .extract(
                                    "intertop",
                                    isTabletOrMobileDevice
                                )
                        }
                        botLink={"https://t.me/Intertop_career_bot"}
                        // standLink={"https://youtu.be/W7ipkmhsVPM"}
                    />
                    <CardCompanyMobile
                        image={"deloitte"}
                        name={Names.deloitte}
                        disabled={false}
                        description={DescriptionsShort.deloitte}
                        longDescription={
                            DescriptionsLong
                                .extract(
                                    "deloitte",
                                    isTabletOrMobileDevice
                                )
                        }
                        // standLink={"#"}
                    />
                </div>

                <div className="row margin-top-15">
                    <CardCompanyMobile
                        image={"ey"}
                        name={Names.ey}
                        disabled={false}
                        description={DescriptionsShort.ey}
                        longDescription={
                            DescriptionsLong
                                .extract(
                                    "ey",
                                    isTabletOrMobileDevice
                                )
                        }
                        botLink={"https://t.me/EY_career_bot"}
                        // standLink={"https://youtu.be/W7ipkmhsVPM"}
                    />
                    <CardCompanyMobile
                        image={"roland"}
                        name={Names.roland}
                        disabled={false}
                        description={DescriptionsShort.roland}
                        longDescription={
                            DescriptionsLong
                                .extract(
                                    "roland",
                                    isTabletOrMobileDevice
                                )
                        }
                        vacancies={
                            <div>
                                Roland Berger is looking for game changers who bring their personal strengths and share our entrepreneurial spirit:

                                <br/><br/>

                                <ul>
                                    <li>
                                        Research Specialist
                                    </li>
                                    <li>
                                        Research Specialist (Automotive)
                                    </li>
                                    <li>
                                        Research Specialist (Financial Services)
                                    </li>
                                    <li>
                                        Internship Consulting
                                    </li>
                                    <li>
                                        Internship Research
                                    </li>
                                </ul>

                                Find more information about vacancies on our tests: https://bigcareerfest.online/tests

                                <br/><br/>

                                Interested? Find out more about our job opportunities on <a href={"http://www.join.rolandberger.com"} target="_blank">www.join.rolandberger.com</a>. Share the future, join us! In case any further questions please feel to contact Tatiana Sheremet by phone +38044 494 0865 or email: <a href={"mailto:Tatiana.Sheremet@rolandberger.com"} target="_blank">Tatiana.Sheremet@rolandberger.com</a>.

                                <p>Our bot: <a href={"https://t.me/rb_kyiv_bot"} target="_blank">@rb_kyiv_bot</a></p>
                            </div>
                        }
                        botLink={"https://t.me/Roland_Berger_career_bot"}
                        // standLink={"https://youtu.be/W7ipkmhsVPM"}
                    />
                </div>
                <div className="row margin-top-15">
                    <CardCompanyMobile
                        image={"bat"}
                        name={Names.bat}
                        disabled={false}
                        description={DescriptionsShort.bat}
                        longDescription={
                            DescriptionsLong
                                .extract(
                                    "bat",
                                    isTabletOrMobileDevice
                                )
                        }
                        vacancies={
                            <div>
                                <b>НАШІ КАР'ЄРНІ МОЖЛИВОСТІ</b>

                                <br/><br/>

                                <b>Global Graduate Programme</b>

                                <br/><br/>

                                Міжнародна програма розвитку майбутніх бізнес-лідерів, що готує тебе до твоєї першої менеджерської позиції всього за 18 місяців!

                                <br/><br/>

                                - 3 напрямки - <b>Фінанси, Маркетинг і Виробництво</b> <br/>
                                - реальні проекти з першого дня <br/>
                                - бізнес-академія для стажерів у Лондоні <br/>
                                - підтримка коуча й ментора <br/>
                                - перша менеджерська роль після випуску з програми

                                <br/><br/>

                                Програма перебачає: <br/>
                                •  повну зайнятість <br/>
                                •  офіційне працевлаштування у штаті компанії <br/>
                                •  привабливу зарплату + бонус <br/>
                                •  повний соціальний пакет.

                                <br/><br/>

                                <b>Детальніше тут:</b> <br/>
                                <a href={"https://careers.bat.com/content/Early-Careers/?locale=en_GB"} target="_blank">https://careers.bat.com/content/Early-Careers/?locale=en_GB</a>

                                <br/><br/>

                                <b>Відгукуйся тут:</b> <br/>
                                <a href={"https://m.rabota.ua/company/view/771"} target="_blank">https://m.rabota.ua/company/view/771</a>

                                <br/><br/>

                                <b>Internship</b> <br/>

                                Також для студентів 2-6 курсів у нас існує програма стажування: <br/>
                                •  гнучкий графік <br/>
                                •  власні цікаві проекти <br/>
                                •  офіційне працевлаштування <br/>
                                •  конкурентна заробітна плата

                                <br/><br/>

                                <b>Детальніше тут:</b> <a href={"https://careers.bat.com/content/Global-Interns/?locale=en_GB"} target="_blank">https://careers.bat.com/content/Global-Interns/?locale=en_GB</a>

                                <br/><br/>
                            </div>
                        }
                        botLink={"https://t.me/BAT_career_bot"}
                        // standLink={"https://youtu.be/W7ipkmhsVPM"}
                    />
                    <CardCompanyMobile
                        image={"bakertilly"}
                        name={Names.bakertilly}
                        disabled={false}
                        description={DescriptionsShort.bakertilly}
                        longDescription={
                            DescriptionsLong
                                .extract(
                                    "bakertilly",
                                    isTabletOrMobileDevice
                                )
                        }
                        botLink={"https://t.me/BCF_Baker_Tilly_Bot"}
                        // standLink={"https://youtu.be/W7ipkmhsVPM"}
                    />
                </div>
                <div className="row margin-top-15">
                    <CardCompanyMobile
                        image={"pepsico"}
                        name={Names.pepsico}
                        disabled={false}
                        description={DescriptionsShort.pepsico}
                        longDescription={
                            DescriptionsLong
                                .extract(
                                    "pepsico",
                                    isTabletOrMobileDevice
                                )
                        }
                        botLink={"https://t.me/Goldman_Sachs_career_bot"}
                        // standLink={"https://youtu.be/W7ipkmhsVPM"}
                    />
                    <CardCompanyMobile
                        image={"pwc"}
                        name={Names.pwc}
                        disabled={false}
                        description={DescriptionsShort.pwc}
                        longDescription={
                            DescriptionsLong
                                .extract(
                                    "pwc",
                                    isTabletOrMobileDevice
                                )
                        }
                        // standLink={"https://youtu.be/W7ipkmhsVPM"}
                    />
                </div>
                <div className="row margin-top-15">
                    <CardCompanyMobile
                        image={"innoware"}
                        name={Names.innoware}
                        disabled={false}
                        description={DescriptionsShort.innoware}
                        longDescription={
                            DescriptionsLong
                                .extract(
                                    "innoware",
                                    isTabletOrMobileDevice
                                )
                        }
                        // standLink={"#"}
                    />
                    <CardCompanyMobile
                        image={"ancor"}
                        name={Names.city}
                        disabled={true}
                        description={DescriptionsShort.ancor}
                        longDescription={
                            DescriptionsLong
                                .extract(
                                    "ancor",
                                    isTabletOrMobileDevice
                                )
                        }
                        disabledBg={true}
                        // standLink={"#"}
                    />
                </div>
                <div className="row margin-top-15">
                    <CardCompanyMobile
                        image={"fozzy"}
                        name={Names.fozzy}
                        disabled={true}
                        description={DescriptionsShort.fozzy}
                        longDescription={
                            DescriptionsLong
                                .extract(
                                    "fozzy",
                                    isTabletOrMobileDevice
                                )
                        }
                        disabledBg={true}
                        // standLink={"#"}
                    />
                    <CardCompanyMobile
                        image={"awellum"}
                        name={Names.awellum}
                        disabled={true}
                        description={DescriptionsShort.awellum}
                        longDescription={
                            DescriptionsLong
                                .extract(
                                    "awellum",
                                    isTabletOrMobileDevice
                                )
                        }
                        disabledBg={true}
                        // standLink={"#"}
                    />
                </div>
                <div className="row margin-top-15">
                    <CardCompanyMobile
                        image={"lcf"}
                        name={Names.lcf}
                        disabled={true}
                        description={DescriptionsShort.lcf}
                        longDescription={
                            DescriptionsLong
                                .extract(
                                    "lcf",
                                    isTabletOrMobileDevice
                                )
                        }
                        disabledBg={true}
                        // standLink={"#"}
                    />
                </div>
            </div>

        );
    }

    return (
        <React.Fragment>
                <div className="row row-eq-height margin-top-20">
                    <CardCompany
                        image={"jooble"}
                        name={Names.jooble}
                        disabled={false}
                        description={DescriptionsShort.jooble}
                        longDescription={
                            DescriptionsLong
                                .extract(
                                    "jooble",
                                    isTabletOrMobileDevice
                                )
                        }
                        // standLink={"#"}
                    />
                    <CardCompany
                        image={"aegis"}
                        name={Names.aegis}
                        disabled={false}
                        description={DescriptionsShort.aegis}
                        longDescription={
                            DescriptionsLong
                                .extract(
                                    "aegis",
                                    isTabletOrMobileDevice
                                )
                        }
                        botLink={"https://t.me/Dentsu_career_bot"}
                        // standLink={"https://youtu.be/W7ipkmhsVPM"}
                    />
                    <CardCompany
                        image={"genesis"}
                        name={Names.genesis}
                        disabled={false}
                        description={DescriptionsShort.genesis}
                        longDescription={
                            DescriptionsLong
                                .extract(
                                    "genesis",
                                    isTabletOrMobileDevice
                                )
                        }
                        botLink={"https://t.me/genesis_vacancies_bot"}
                        // standLink={"https://youtu.be/W7ipkmhsVPM"}
                    />
                    <CardCompany
                        image={"jti"}
                        name={Names.jti}
                        disabled={false}
                        description={DescriptionsShort.jti}
                        longDescription={
                            DescriptionsLong
                                .extract(
                                    "jti",
                                    isTabletOrMobileDevice
                                )
                        }
                        vacancies={
                            <div>
                                <b className="h4">Актуальні можливості для студентів:</b>

                                <br/><br/>

                                <li><b>Весна 2021: Стажер міжнародної програми Make It Bright:</b></li>

                                <br/>

                                <a href="https://www.makeitbright.com/en" target="_blank">https://www.makeitbright.com/en</a>

                                <br/> <br/>

                                Make It Bright – це: <br/>
                                — Робота над власною ідеєю з надійним напарником і професійними менторами; <br/>
                                — Можливість презентувати бізнес-ідею топ-менеджменту JTI в Києві, а якщо пощастить - на Глобальному топ-менеджменту на фіналі у Женеві; <br/>
                                — Тренінги з soft skills від професіоналів JTI для команд-фіналістів; <br/>
                                — Нетворкінг з учасниками з різних країн світу; <br/>
                                — Нагорода за перемогу у вигляді 6-місячного оплачуваного стажування в одному з міжнародних офісів JTI;

                                <br/><br/>

                                Терміни проведення програми: березень - жовтень.

                                <br/><br/>

                                Відео про проект Make It Bright: <br/>

                                <a href="https://www.youtube.com/watch?time_continue=1&v=mhBoELqqE1w&feature=emb_logo" target="_blank">https://www.youtube.com/watch?time_continue=1&v=mhBoELqqE1w&feature=emb_logo</a> <br/> <br/>

                                <li><b>Червень/ грудень: сезонна практика</b></li>
                                <b>Слідкуйте за анонсами:</b> <a href="https://bit.ly/3be7RnG" target="_blank">https://bit.ly/3be7RnG</a> <br/>
                                — Для студентів 2−6 курсів <br/>
                                — Практика у різних відділах <br/>
                                — Гнучкий графік роботи: 20 год на тиждень <br/>
                                — Тривалість 3 місяці <br/>
                                — Офіційне працевлаштування та оплата праці

                                <br/> <br/>

                                <li><b>Стажування в центральному офісі в Києві:</b></li>
                                <b>Ця вакансія відкривається за бізнес-необхідністю.</b><br/>
                                <b>Слідкуйте за анонсами:</b> <a href="https://bit.ly/3be7RnG" target="_blank">https://bit.ly/3be7RnG</a> <br/>
                                — Студенти 4−6 курсів та випускники <br/>
                                — Стажування в кількох відділах <br/>
                                — Гнучкий графік роботи: від 30 годин на тиждень <br/>
                                — Тривалість 12 або 18 місяців <br/>
                                — Офіційне працевлаштування та оплата праці

                                <br/> <br/>

                                <li><b>Стажування у відділі збуту:</b></li>
                                <b>Ця вакансія відкривається за бізнес-необхідністю.</b> <br/>
                                <b>Слідкуйте за анонсами:</b> <a href="https://bit.ly/3be7RnG" target="_blank">https://bit.ly/3be7RnG</a> <br/>
                                — Студенти 4−6 курсів та випускники <br/>
                                — Стажування в різних містах України (Київ, Харків, Одеса, Дніпро, Львів, Хмельницький) <br/>
                                — Гнучкий графік роботи: від 30 год на тиждень <br/>
                                — Тривалість 9 місяців <br/>
                                — Офіційне працевлаштування та оплата праці

                                <br/><br/>

                                <li><b>Online Open Days (Онлайн дні відкритих дверей) – coming soon</b></li>
                                <b>Слідкуйте за анонсами:</b> <br/>
                                — facebook.com/jticareersukraine <br/>
                                — instagram.com/jti_ukraine

                                <br/> <br/>

                                Також ви можете підписатися на розсилку сповіщень на нашому кар’єрному сайті і миттєво дізнаватися про нові можливості, як тільки вони з‘являються: <br/>
                                <a href="https://bit.ly/3be7RnG" target="_blank">https://bit.ly/3be7RnG</a>
                            </div>
                        }
                        botLink={"https://t.me/JTI_career_bot"}
                        // standLink={"https://youtu.be/W7ipkmhsVPM"}
                    />
                    <CardCompany
                        image={"intertop"}
                        name={Names.intertop}
                        disabled={false}
                        description={DescriptionsShort.intertop}
                        longDescription={
                            DescriptionsLong
                                .extract(
                                    "intertop",
                                    isTabletOrMobileDevice
                                )
                        }
                        botLink={"https://t.me/Intertop_career_bot"}
                        // standLink={"https://youtu.be/W7ipkmhsVPM"}
                    />
                    <CardCompany
                        image={"deloitte"}
                        name={Names.deloitte}
                        disabled={false}
                        description={DescriptionsShort.deloitte}
                        longDescription={
                            DescriptionsLong
                                .extract(
                                    "deloitte",
                                    isTabletOrMobileDevice
                                )
                        }
                        // standLink={"#"}
                    />
                </div>

                <div className="row margin-top-20">
                    <CardCompany
                        image={"ey"}
                        name={Names.ey}
                        disabled={false}
                        description={DescriptionsShort.ey}
                        longDescription={
                            DescriptionsLong
                                .extract(
                                    "ey",
                                    isTabletOrMobileDevice
                                )
                        }
                        botLink={"https://t.me/EY_career_bot"}
                        // standLink={"https://youtu.be/W7ipkmhsVPM"}
                    />
                    <CardCompany
                        image={"roland"}
                        name={Names.roland}
                        disabled={false}
                        description={DescriptionsShort.roland}
                        longDescription={
                            DescriptionsLong
                                .extract(
                                    "roland",
                                    isTabletOrMobileDevice
                                )
                        }
                        vacancies={
                            <div>
                                Roland Berger is looking for game changers who bring their personal strengths and share our entrepreneurial spirit:

                                <br/><br/>

                                <ul>
                                    <li>
                                        Research Specialist
                                    </li>
                                    <li>
                                        Research Specialist (Automotive)
                                    </li>
                                    <li>
                                        Research Specialist (Financial Services)
                                    </li>
                                    <li>
                                        Internship Consulting
                                    </li>
                                    <li>
                                        Internship Research
                                    </li>
                                </ul>

                                Find more information about vacancies on our tests: https://bigcareerfest.online/tests

                                <br/><br/>

                                Interested? Find out more about our job opportunities on <a href={"http://www.join.rolandberger.com"} target="_blank">www.join.rolandberger.com</a>. Share the future, join us! In case any further questions please feel to contact Tatiana Sheremet by phone +38044 494 0865 or email: <a href={"mailto:Tatiana.Sheremet@rolandberger.com"} target="_blank">Tatiana.Sheremet@rolandberger.com</a>.

                                <p>Our bot: <a href={"https://t.me/rb_kyiv_bot"} target="_blank">@rb_kyiv_bot</a></p>
                            </div>
                        }
                        botLink={"https://t.me/Roland_Berger_career_bot"}
                        // standLink={"https://youtu.be/W7ipkmhsVPM"}
                    />
                    <CardCompany
                        image={"bat"}
                        name={Names.bat}
                        disabled={false}
                        description={DescriptionsShort.bat}
                        longDescription={
                            DescriptionsLong
                                .extract(
                                    "bat",
                                    isTabletOrMobileDevice
                                )
                        }
                        vacancies={
                            <div>
                                <b>НАШІ КАР'ЄРНІ МОЖЛИВОСТІ</b>

                                <br/><br/>

                                <b>Global Graduate Programme</b>

                                <br/><br/>

                                Міжнародна програма розвитку майбутніх бізнес-лідерів, що готує тебе до твоєї першої менеджерської позиції всього за 18 місяців!

                                <br/><br/>

                                - 3 напрямки - <b>Фінанси, Маркетинг і Виробництво</b> <br/>
                                - реальні проекти з першого дня <br/>
                                - бізнес-академія для стажерів у Лондоні <br/>
                                - підтримка коуча й ментора <br/>
                                - перша менеджерська роль після випуску з програми

                                <br/><br/>

                                Програма перебачає: <br/>
                                •  повну зайнятість <br/>
                                •  офіційне працевлаштування у штаті компанії <br/>
                                •  привабливу зарплату + бонус <br/>
                                •  повний соціальний пакет.

                                <br/><br/>

                                <b>Детальніше тут:</b> <br/>
                                <a href={"https://careers.bat.com/content/Early-Careers/?locale=en_GB"} target="_blank">https://careers.bat.com/content/Early-Careers/?locale=en_GB</a>

                                <br/><br/>

                                <b>Відгукуйся тут:</b> <br/>
                                <a href={"https://m.rabota.ua/company/view/771"} target="_blank">https://m.rabota.ua/company/view/771</a>

                                <br/><br/>

                                <b>Internship</b> <br/>

                                Також для студентів 2-6 курсів у нас існує програма стажування: <br/>
                                •  гнучкий графік <br/>
                                •  власні цікаві проекти <br/>
                                •  офіційне працевлаштування <br/>
                                •  конкурентна заробітна плата

                                <br/><br/>

                                <b>Детальніше тут:</b> <a href={"https://careers.bat.com/content/Global-Interns/?locale=en_GB"} target="_blank">https://careers.bat.com/content/Global-Interns/?locale=en_GB</a>

                                <br/><br/>
                            </div>
                        }
                        botLink={"https://t.me/BAT_career_bot"}
                        // standLink={"https://youtu.be/W7ipkmhsVPM"}
                    />
                    <CardCompany
                        image={"bakertilly"}
                        name={Names.bakertilly}
                        disabled={false}
                        description={DescriptionsShort.bakertilly}
                        longDescription={
                            DescriptionsLong
                                .extract(
                                    "bakertilly",
                                    isTabletOrMobileDevice
                                )
                        }
                        botLink={"https://t.me/BCF_Baker_Tilly_Bot"}
                        // standLink={"https://youtu.be/W7ipkmhsVPM"}
                    />
                    <CardCompany
                        image={"pepsico"}
                        name={Names.pepsico}
                        disabled={false}
                        description={DescriptionsShort.pepsico}
                        longDescription={
                            DescriptionsLong
                                .extract(
                                    "pepsico",
                                    isTabletOrMobileDevice
                                )
                        }
                        botLink={"https://t.me/Goldman_Sachs_career_bot"}
                        // standLink={"https://youtu.be/W7ipkmhsVPM"}
                    />
                    <CardCompany
                        image={"pwc"}
                        name={Names.pwc}
                        disabled={false}
                        description={DescriptionsShort.pwc}
                        longDescription={
                            DescriptionsLong
                                .extract(
                                    "pwc",
                                    isTabletOrMobileDevice
                                )
                        }
                        // standLink={"https://youtu.be/W7ipkmhsVPM"}
                    />
                </div>
                <div className="row margin-top-20">
                    <CardCompany
                        image={"innoware"}
                        name={Names.innoware}
                        disabled={false}
                        description={DescriptionsShort.innoware}
                        longDescription={
                            DescriptionsLong
                                .extract(
                                    "innoware",
                                    isTabletOrMobileDevice
                                )
                        }
                        // standLink={"#"}
                    />
                    <CardCompany
                        image={"ancor"}
                        name={Names.city}
                        disabled={true}
                        description={DescriptionsShort.ancor}
                        longDescription={
                            DescriptionsLong
                                .extract(
                                    "ancor",
                                    isTabletOrMobileDevice
                                )
                        }
                        disabledBg={true}
                        // standLink={"#"}
                    />
                    <CardCompany
                        image={"fozzy"}
                        name={Names.fozzy}
                        disabled={true}
                        description={DescriptionsShort.fozzy}
                        longDescription={
                            DescriptionsLong
                                .extract(
                                    "fozzy",
                                    isTabletOrMobileDevice
                                )
                        }
                        disabledBg={true}
                        // standLink={"#"}
                    />
                    <CardCompany
                        image={"awellum"}
                        name={Names.awellum}
                        disabled={true}
                        description={DescriptionsShort.awellum}
                        longDescription={
                            DescriptionsLong
                                .extract(
                                    "awellum",
                                    isTabletOrMobileDevice
                                )
                        }
                        disabledBg={true}
                        // standLink={"#"}
                    />
                    <CardCompany
                        image={"lcf"}
                        name={Names.lcf}
                        disabled={true}
                        description={DescriptionsShort.lcf}
                        longDescription={
                            DescriptionsLong
                                .extract(
                                    "lcf",
                                    isTabletOrMobileDevice
                                )
                        }
                        disabledBg={true}
                        // standLink={"#"}
                    />
                </div>
    </React.Fragment>

    );
};


export default BlockCompanies;