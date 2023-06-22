import cn from 'classnames';
import { useEffect } from 'react';
import classes from './Contacts.module.scss';
import Linkedin from '../../icons/Linkedin/Linkedin';
import GitHub from '../../icons/GitHub/GitHub';
import CopyButton from '../../components/CopyButton/CopyButton';

const Contacts = () => {
  const {
    img,
    bio,
    contact,
    name,
    devops,
    links,
    link,
    title,
    subtitle,
    itCareers,
    header,
    container,
    grid,
    icon,
    phrase,
    text,
    titlePhrase,
    section,
    contact__top: contactTop,
    image__container: imgContainer,
    grid__desktop: gridDesktop,
    grid__tablet: gridTablet,
    grid__mobile: gridMobile,
    grid__item: gridItem,
    grid__item__mobile_1_4: gridMobileFullSize,
    grid__item__mobile_2_3: gridMobileCenter,
    grid__item__tablet_1_12: gridTabletFullSize,
    grid__item__tablet_4_9: gridTabletCenter,
    grid__item__desktop_1_8: gridDesktopStart,
    grid__item__desktop_1_14: gridDesktopMiddle,
    grid__item__desktop_15_24: gridDesktopEnd,
    grid__item__desktop_9_24: gridDesktopAbout,
    grid__item__desktop_10_15: gridDesktopCenter,
    grid__item__desktop_17_24: gridDesktopInfo,
    grid__item__desktop_2_8: gridDesktopPhrase,
    grid__item__desktop_1_24: gridDesktopFullSize,
    'grid__item-row': gridRow,
    about__top: aboutTop,
    about__project: aboutProject,
    about__footer: marginFooter,
    about__header: aboutMargin,
  } = classes;

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  });

  return (
    <div className={contact}>
      <div className={cn(container)}>
        <div className={cn(grid, gridDesktop, gridTablet, gridMobile, section)}>
          <div
            className={cn(
              gridItem,
              gridMobileFullSize,
              gridTabletFullSize,
              gridDesktopMiddle,
              aboutTop,
              gridRow,
            )}
          >
            <div className={header}>
              <h1 className={title}>Code Hunters</h1>
              <h2 className={titlePhrase}>
                Really cool things need to be created with cool people.
                We love what we do and therefore give our best in our work.
              </h2>
            </div>
          </div>
          <div
            className={cn(
              gridItem,
              gridMobileFullSize,
              gridTabletFullSize,
              gridDesktopEnd,
              imgContainer,
            )}
          >
            <img
              src={`${process.env.PUBLIC_URL}/img/company/IT.jpeg`}
              alt="Our IT careers office"
              className={itCareers}
            />
          </div>
        </div>
        <div
          className={
            cn(
              grid,
              gridDesktop,
              gridTablet,
              gridMobile,
              aboutTop,
            )
          }
        >
          <div
            className={cn(
              gridItem,
              gridMobileFullSize,
              gridTabletFullSize,
              gridDesktopFullSize,
            )}
          >
            <div>
              <h2 className={subtitle}>
                OUR TEAM
              </h2>
            </div>
          </div>
        </div>
        <div
          className={
            cn(
              grid,
              gridDesktop,
              gridTablet,
              gridMobile,
              aboutTop,
            )
          }
        >
          <div
            className={cn(
              gridItem,
              gridMobileFullSize,
              gridTabletFullSize,
              gridDesktopPhrase,
            )}
          >
            <div className={phrase}>
              <p>
                &quot;I can talk to React components so efficiently
                that even real people try to call render() methods on me!&quot;
              </p>
            </div>
          </div>
          <div
            className={cn(
              gridItem,
              gridMobileCenter,
              gridTabletCenter,
              gridDesktopCenter,
            )}
          >
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/img/team/Daria.jpg`}
                alt="Daria Prokivska Full-stack Developer"
                className={img}
              />
            </div>
          </div>
          <div
            className={cn(
              gridItem,
              gridMobileFullSize,
              gridTabletFullSize,
              gridDesktopInfo,
            )}
          >
            <div className={bio}>
              <h3 className={name}>Daria Prokivska</h3>
              <h4 className={devops}>Team Lead | Full-stack Developer</h4>
              <div className={links}>
                <a
                  href="https://www.linkedin.com/in/daria-prokivska-267b73278"
                  className={link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className={icon}>
                    <Linkedin />
                  </div>
                </a>
                <a
                  href="https://github.com/prokivskaaa"
                  className={link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className={icon}>
                    <GitHub />
                  </div>
                </a>
                <CopyButton value="daria.prokivska@gmail.com" />
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            cn(
              grid,
              gridDesktop,
              gridTablet,
              gridMobile,
              contactTop,
            )
          }
        >
          <div
            className={cn(
              gridItem,
              gridMobileFullSize,
              gridTabletFullSize,
              gridDesktopPhrase,
            )}
          >
            <div className={phrase}>
              <p>
                &quot;I have Node.js in my DNA
                – I code on it, even in my dreams!&quot;
              </p>
            </div>
          </div>
          <div
            className={cn(
              gridItem,
              gridMobileCenter,
              gridTabletCenter,
              gridDesktopCenter,
            )}
          >
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/img/team/Anna.jpg`}
                alt="Anna Latusha Full-stack Developer"
                className={img}
              />
            </div>
          </div>
          <div
            className={cn(
              gridItem,
              gridMobileFullSize,
              gridTabletFullSize,
              gridDesktopInfo,
            )}
          >
            <div className={bio}>
              <h3 className={name}>Anna Latusha</h3>
              <h4 className={devops}>Full-stack Developer</h4>
              <div className={links}>
                <a
                  href="https://www.linkedin.com/in/anna-latusha-03298a278"
                  className={link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className={icon}>
                    <Linkedin />
                  </div>
                </a>
                <a
                  href="https://github.com/AnyaLyaLya"
                  className={link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className={icon}>
                    <GitHub />
                  </div>
                </a>
                <CopyButton value="annlatusha@gmail.com" />
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            cn(
              grid,
              gridDesktop,
              gridTablet,
              gridMobile,
              contactTop,
            )
          }
        >
          <div
            className={cn(
              gridItem,
              gridMobileFullSize,
              gridTabletFullSize,
              gridDesktopPhrase,
            )}
          >
            <div className={phrase}>
              <p>
                &quot;I can make a loading page so fast
                you&apos;ll forget you had to wait for anything&quot;
              </p>
            </div>
          </div>
          <div
            className={cn(
              gridItem,
              gridMobileCenter,
              gridTabletCenter,
              gridDesktopCenter,
            )}
          >
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/img/team/Yullia.jpg`}
                alt="Yuliia Anisimova Full-stack Developer"
                className={img}
              />
            </div>
          </div>
          <div
            className={cn(
              gridItem,
              gridMobileFullSize,
              gridTabletFullSize,
              gridDesktopInfo,
            )}
          >
            <div className={bio}>
              <h3 className={name}>Yuliia Anisimova</h3>
              <h4 className={devops}>Full-stack Developer</h4>
              <div className={links}>
                <a
                  href="https://www.linkedin.com/in/yuliia-anisimova-dev"
                  className={link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className={icon}>
                    <Linkedin />
                  </div>
                </a>
                <a
                  href="https://github.com/yuliia-anisimova"
                  className={link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className={icon}>
                    <GitHub />
                  </div>
                </a>
                <CopyButton value="anisimova.yuliia01@gmail.com" />
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            cn(
              grid,
              gridDesktop,
              gridTablet,
              gridMobile,
              contactTop,
            )
          }
        >
          <div
            className={cn(
              gridItem,
              gridMobileFullSize,
              gridTabletFullSize,
              gridDesktopPhrase,
            )}
          >
            <div className={phrase}>
              <p>
                &quot;I can spin Swiper so fast
                that even carousels would envy her spins!&quot;
              </p>
            </div>
          </div>
          <div
            className={cn(
              gridItem,
              gridMobileCenter,
              gridTabletCenter,
              gridDesktopCenter,
            )}
          >
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/img/team/Uladzislau.jpg`}
                alt="Uladzislau Bichko Full-stack Developer"
                className={img}
              />
            </div>
          </div>
          <div
            className={cn(
              gridItem,
              gridMobileFullSize,
              gridTabletFullSize,
              gridDesktopInfo,
            )}
          >
            <div className={bio}>
              <h3 className={name}>Uladzislau Bichko</h3>
              <h4 className={devops}>Full-stack Developer</h4>
              <div className={links}>
                <a
                  href="https://www.linkedin.com/in/uladzislau-bichko-49b5a4238"
                  className={link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className={icon}>
                    <Linkedin />
                  </div>
                </a>
                <a
                  href="https://github.com/asmd564"
                  className={link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className={icon}>
                    <GitHub />
                  </div>
                </a>
                <CopyButton value="wladyslaw.biczko@gmail.com" />
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            cn(
              grid,
              gridDesktop,
              gridTablet,
              gridMobile,
              contactTop,
            )
          }
        >
          <div
            className={cn(
              gridItem,
              gridMobileFullSize,
              gridTabletFullSize,
              gridDesktopPhrase,
            )}
          >
            <div className={phrase}>
              <p>
                &quot;I can resolve a merge conflict
                in Git faster than you can
                <br />
                say &apos;responsive design&apos;!&quot;
              </p>
            </div>
          </div>
          <div
            className={cn(
              gridItem,
              gridMobileCenter,
              gridTabletCenter,
              gridDesktopCenter,
            )}
          >
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/img/team/Artem.jpg`}
                alt="Artem Liaskovets Full-stack Developer"
                className={img}
              />
            </div>
          </div>
          <div
            className={cn(
              gridItem,
              gridMobileFullSize,
              gridTabletFullSize,
              gridDesktopInfo,
            )}
          >
            <div className={bio}>
              <h3 className={name}>Artem Liaskovets</h3>
              <h4 className={devops}>Full-stack Developer</h4>
              <div className={links}>
                <a
                  href="https://www.linkedin.com/in/artem-liaskovets-993340250"
                  className={link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className={icon}>
                    <Linkedin />
                  </div>
                </a>
                <a
                  href="https://github.com/Hamuud"
                  className={link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className={icon}>
                    <GitHub />
                  </div>
                </a>
                <CopyButton value="artem.liaskovets@gmail.com" />
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            cn(
              grid,
              gridDesktop,
              gridTablet,
              gridMobile,
              aboutMargin,
              marginFooter,
            )
          }
        >
          <div
            className={cn(
              gridItem,
              gridMobileFullSize,
              gridTabletFullSize,
              gridDesktopStart,
            )}
          >
            <div className={aboutProject}>
              <h2 className={subtitle}>
                About Project
              </h2>
            </div>
          </div>
          <div
            className={cn(
              gridItem,
              gridMobileFullSize,
              gridTabletFullSize,
              gridDesktopAbout,
            )}
          >
            <p className={text}>
              Nice Gadgets is a website developed by a
              team of five talented programmers.
              Using modern technologies such as:
              <strong>
                &nbsp;React, TypeScript, Express and Node.js
              </strong>
              , they created an interactive website with a phone database.
              <br />
              <br />
              The main goal of the project was to develop a platform
              where users can browse and purchase various phone models.&nbsp;
              <strong>
                The project included out-of-the-box shopping functionality
                that allowed users to add phones to their cart.
              </strong>
              <br />
              <br />
              The developed website had an intuitive interface
              that allowed users to easily browse information
              about phones such as&nbsp;
              <strong>
                model, manufacturer,
                specifications and prices.&nbsp;
              </strong>
              In addition, users had
              the opportunity to filter phones
              according to various criteria, which simplified their search.
              <br />
              <br />
              <strong>
                The developed download functionality allowed
                site administrators to update the phone database
                by downloading a file with a special format.
              </strong>
              This simplified the process of updating the
              product range and ensured
              the relevance of information on the website.
              <br />
              <br />
              <strong>
                The team also paid a lot of attention to the navigation
                and adaptation of the website for all devices.
              </strong>
              They ensured that the site was
              <strong>
                &nbsp;easily accessible and user-friendly&nbsp;
              </strong>
              on various devices, from
              desktop computers to mobile phones.
              The website
              <strong>
                &nbsp;automatically adapted&nbsp;
              </strong>
              to the screen size,
              providing an optimal user
              experience regardless of the device used.
              <br />
              <br />
              Thanks to the joint efforts of a team of programmers,
              the &quot;Nice Gadgets&quot; project became a successful
              implementation of the idea of a website with
              a database of telephones and a purchasing function.
              <br />
              <strong>
                It provided a convenient way for users to choose and
                purchase phones while providing a pleasant
                interface and optimal user experience.
              </strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
