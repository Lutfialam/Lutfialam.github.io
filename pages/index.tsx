import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Modal from '../components/Modal';
import Dropdown from '../components/Dropdown';
import CardImage from '../components/CardImage';

import { Document, Page, pdfjs } from 'react-pdf';
import { SRLWrapper } from 'simple-react-lightbox';
const feather = require('feather-icons');

// import ui_design from '../public/images/ui.png';
// import harsa from '../public/images/harsa.png';
// import indagi from '../public/images/indagi.png';
// import search_text from '../public/images/search_text.png';
// import enjoy_travel from '../public/images/enjoy_travel.png';
// import pengaduan_masyarakat from '../public/images/pengaduan_masyarakat.jpg';
// import smartopname from '../public/images/smartopname.png';

const Home: NextPage = () => {
  const [Scale, SetScale] = useState(0.6);
  const [CVPage, SetCVPage] = useState(1);
  const [CVPath, SetCVPath] = useState('Lutfi_Alamsyah-CV.pdf');
  const [MaxPage, SetMaxPage] = useState(1);
  const [ActiveCV, SetActiveCV] = useState(1);
  const [ModalCV, SetModalCV] = useState(false);
  const [Loading, SetLoading] = useState(true);
  const [LoadingCV, SetLoadingCV] = useState(false);
  const [SidebarOpen, SetSidebarOpen] = useState(false);

  const ButtonControl: React.FC<{
    text: string;
    action: string;
    disable?: boolean;
  }> = ({ text, action, disable }) => {
    return (
      <button
        className={`bg-transparent text-blue-700 font-semibold py-2 px-4 border border-blue-500 rounded 
          ${
            disable
              ? 'opacity-40'
              : 'hover:bg-gray-500 hover:border-transparent hover:text-white'
          }
        `}
        type='button'
        disabled={disable ?? false}
        onClick={() => {
          switch (action) {
            case 'plus_scale':
              window.innerWidth > 768
                ? SetScale(Scale + 0.1)
                : SetScale(Scale + 0.01);
              break;
            case 'minus_scale':
              window.innerWidth > 768
                ? SetScale(Scale - 0.1)
                : SetScale(Scale - 0.01);
              break;
            case 'prev_page':
              SetCVPage(CVPage - 1);
              break;
            case 'next_page':
              SetCVPage(CVPage + 1);
              break;
          }
        }}
      >
        {text}
      </button>
    );
  };

  const onDocumentLoadSuccess = (document: { numPages: any }) => {
    const { numPages } = document;
    SetMaxPage(numPages);
    SetLoadingCV(false);
  };

  const download = () => {
    let link = document.createElement('a');

    link.href = CVPath;
    link.setAttribute('download', `Lutfi_Alamsyah-CV-2021.pdf`);

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const CVChanger = (id: number) => {
    SetCVPage(1);
    SetActiveCV(id);

    if (window.innerWidth > 768) {
      id == 1 ? SetScale(0.5) : SetScale(1.5);
    } else {
      id == 1 ? SetScale(0.15) : SetScale(0.6);
    }
    id == 1
      ? SetCVPath('Lutfi_Alamsyah-CV.pdf')
      : SetCVPath('Resume-Lutfi-Alamsyah.pdf');
  };

  useEffect(() => {
    // pdfjs.GlobalWorkerOptions.workerSrc = 'pdf.worker.min.js';
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
    feather.replace();
    if (window.innerWidth > 768) {
      ActiveCV == 1 ? SetScale(0.5) : SetScale(1.5);
    } else {
      ActiveCV == 1 ? SetScale(0.15) : SetScale(0.6);
    }
    SetLoading(false);
  }, []);

  return (
    <div className='dark:bg-gray-900'>
      <Head>
        <title>Lutfi Alamsyah - Software engineer</title>

        <meta name='description' content="Lutfi Alamsyah's portfolio" />
        <meta name='keywords' content='Lutfi Alamsyah portfolio' />
        <meta name='author' content='Lutfi Alamsyah' />
      </Head>
      {Loading ? (
        <div className='flex justify-center items-center h-screen'>
          <div className='spin'></div>
        </div>
      ) : (
        <>
          <div className='fixed h-screen hidden sm:flex flex-col space-y-6 justify-end px-6 py-10 z-30'>
            <Dropdown
              to='https://github.com/lutfialam'
              icon='github'
              headerText='My github repo'
              paragraph={
                <p>
                  If you want look my repository on github. You can meet me with
                  username <span className='text-indigo-500'>Lutfialam</span>
                </p>
              }
            />
            <Dropdown
              to='https://telegram.me/lutfialamsyah'
              icon='send'
              headerText='My Telegram'
              paragraph={
                <p>
                  If you want contact me. You can meet me on telegram with
                  username{' '}
                  <span className='text-indigo-500'>@Lutfialamsyah</span>
                </p>
              }
            />
            <Dropdown
              to='https://www.linkedin.com/in/lutfi-alamsyah/'
              icon='linkedin'
              headerText='My Linkedin'
              paragraph={
                <p>
                  If you want contact me. You can meet me on linkedin with
                  username{' '}
                  <span className='text-indigo-500'>Lutfialamsyah</span>
                </p>
              }
            />
            <Dropdown
              top='-mt-24'
              to='https://mail.google.com/mail/?view=cm&fs=1&to=lutfialamsyah1003@gmail.com'
              icon='mail'
              headerText='My Email'
              paragraph={
                <p>
                  If you want contact me. You can meet me on email with username{' '}
                  <span className='text-indigo-500'>
                    lutfialamsyah1003@gmail.com
                  </span>
                </p>
              }
            />
          </div>
          {/* <Navbar /> */}
          <Modal
            modal_id='CV_modal'
            open={ModalCV}
            state={SetModalCV}
            header={
              <div className='dropdown flex justify-center'>
                <a className='dropbtn no-underline text__navigation flex content-center'>
                  <span className='mr-1 hidden md:flex'>
                    {ActiveCV == 1 ? 'Primary CV' : 'Resume from linkedin'}
                  </span>
                  <svg
                    className='fill-current h-4 w-4 flex self-center'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                  >
                    <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />{' '}
                  </svg>
                </a>

                <div className='ml-36 mt-6 dropdown-content w-2/6 md:w-1/6 rounded-lg mr-12'>
                  <div
                    onClick={async () => {
                      await CVChanger(1);
                    }}
                    className='hover:bg-indigo-500 hover:text-white pl-6 font-light text-xs'
                  >
                    <div className='flex flex-row content-center w-full h-full text-gray-500 hover:text-white py-3'>
                      <i
                        className='hover:text-white'
                        data-feather='clipboard'
                      ></i>
                      <h1 className='flex self-center ml-4'>Primary CV</h1>
                    </div>
                  </div>
                  <div
                    onClick={async () => {
                      await CVChanger(2);
                    }}
                    className='hover:bg-indigo-500 hover:text-white pl-6 font-light text-xs'
                  >
                    <div className='flex flex-row content-center w-full h-full text-gray-500 hover:text-white py-3'>
                      <i
                        className='hover:text-white'
                        data-feather='linkedin'
                      ></i>
                      <h1 className='flex self-center ml-4'>
                        Resume from linkedin
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            }
            footer_left={
              <>
                <ButtonControl
                  text='Prev'
                  action='prev_page'
                  disable={CVPage == 1 ? true : false}
                />
                <ButtonControl
                  text='Next'
                  action='next_page'
                  disable={MaxPage == CVPage ? true : false}
                />
              </>
            }
            footer={
              <>
                <ButtonControl text='-' action='minus_scale' />
                <ButtonControl text='+' action='plus_scale' />
              </>
            }
          >
            <Document
              file={CVPath}
              loading={<div className='spin'></div>}
              onLoadSuccess={(doc) => {
                onDocumentLoadSuccess(doc);
              }}
            >
              <Page pageNumber={CVPage} scale={Scale} className='mt-0' />
            </Document>
          </Modal>
          <div
            className='z-40 fixed right-0 bottom-0 rounded-full md:hidden bg-indigo-500 m-4 p-4'
            onClick={() => {
              SetSidebarOpen(true);
            }}
          >
            <i className='text-white' data-feather='menu'></i>
          </div>
          <aside className='md:hidden'>
            <div
              className={`transform transition-all ease-in-out duration-500 bg-black opacity-50 fixed h-full z-50 w-full ${
                SidebarOpen ? 'translate-x-0' : '-translate-x-full'
              }`}
              onClick={() => {
                SetSidebarOpen(false);
              }}
            ></div>
            <div
              className={`flex flex-col p-4 justify-end inset-y-0 rounded-xl w-3/4 fixed right-0 bg-indigo-500 z-50 m-2 transform transition-all ease-in-out duration-700 ${
                SidebarOpen
                  ? 'translate-x-0 opacity-100'
                  : 'translate-x-full opacity-0'
              }`}
            >
              <h1 className='font-semibold text-2xl text-gray-200'>
                Find me at:{' '}
              </h1>
              <hr className='my-3 text-gray-200' />

              <div className='list-none space-y-3'>
                <a
                  href='https://github.com/lutfialam'
                  className='flex items-center font-semibold text-2xl text-gray-200 space-x-4 justify-between'
                  target='_blank'
                >
                  <h1>Github</h1>
                  <i data-feather='github'></i>
                </a>
                <a
                  href='https://telegram.me/lutfialamsyah'
                  className='flex items-center font-semibold text-2xl text-gray-200 space-x-4 justify-between'
                  target='_blank'
                >
                  <h1>Telegram</h1>
                  <i data-feather='send'></i>
                </a>
                <a
                  href='https://www.linkedin.com/in/lutfi-alamsyah/'
                  className='flex items-center font-semibold text-2xl text-gray-200 space-x-4 justify-between'
                  target='_blank'
                >
                  <h1>Linkedin</h1>
                  <i data-feather='linkedin'></i>
                </a>
                <a
                  href='https://mail.google.com/mail/?view=cm&fs=1&to=lutfialamsyah1003@gmail.com'
                  className='flex items-center font-semibold text-2xl text-gray-200 space-x-4 justify-between'
                  target='_blank'
                >
                  <h1>E-Mail</h1>
                  <i data-feather='mail'></i>
                </a>
              </div>

              <h1 className='font-light text-gray-200 flex self-center mt-24'>
                Lutfialamsyah
              </h1>
            </div>
          </aside>

          {/* <div className="retangle"></div> */}
          <div className='container sm:pt-0 flex flex-col justify-center mx-20 overflow-hidden'>
            <div className='retangle z-0 hidden md:flex'></div>
            <div className='container h-screen w-screen z-10'>
              <div className='justify-center h-full flex flex-col w-full'>
                <div className='flex justify-center w-full'>
                  <div className='flex-col justify-center w-full md:w-2/4 self-center'>
                    <h1 className='text-3xl md:text-6xl font-bold text-gray-600 dark:text-white'>
                      <span className='text-indigo-500'>Hello</span>, Im Lutfi
                      Alamsyah
                    </h1>
                    <p className='text-gray-600 mt-4 py-4'>
                      I am a{' '}
                      <span className='text-indigo-500'>Software engineer</span>{' '}
                      have experienced in build and developing website and
                      android application(react native). For more than two years
                      I have created several website projects, some of which are
                      for other people's needs or for my experiments.
                    </p>
                    <div className='flex'>
                      <button
                        className='bg-indigo-500 text-xs md:text-base py-2 px-4 md:py-3 md:px-9 text-white my-5 focus:outline-none rounded-full focus:border-indigo-500 focus:bg-transparent focus:text-indigo-600 border-2 focus:border-blue mr-2 md:mr-5'
                        onClick={() => {
                          download();
                        }}
                      >
                        Download CV
                      </button>
                      <button
                        className='bg-transparent text-xs md:text-base py-2 px-4 md:py-3 md:px-9 text-indigo-600 my-5 focus:outline-none rounded-full border-indigo-500 border-2 focus:ring'
                        onClick={() => {
                          SetModalCV(true);
                        }}
                      >
                        View CV
                      </button>
                    </div>
                  </div>
                  <div className='w-0 md:w-2/4'>
                    {/* <div className="relative  md:flex w-11/12">
                            <Image src="images/undraw_hello.svg" className="header_image object-cover" alt="hello image" layout="fill" />
                          </div> */}
                    <img
                      src='images/undraw_hello.svg'
                      className='header_image hidden md:flex w-11/12'
                      alt='asd'
                    />
                  </div>
                </div>
              </div>
            </div>

            <SRLWrapper>
              <div
                className='container flex md:mb-24 justify-center md:justify-start flex-wrap content-center'
                id='portfolio'
              >
                <div className='w-full md:w-1/2 flex justify-center md:justify-start flex-wrap content-center'>
                  <h1 className='text-2xl md:text-5xl font-bold text-gray-600 my-3'>
                    Latest <span className='text-indigo-600'>project</span>
                  </h1>
                  <p className='text-gray-500 self-center text-center md:text-left'>
                    My latest project is{' '}
                    <span className='text-indigo-500'>lumah shop</span>. is a
                    shoe store website in which there are sales of various
                    shoes, ranging from sports, daily, school and others. This
                    website is made using Java web with hibernate and JSF with
                    bootstrap for the frontend. This website was created only
                    for the purposes of my monthly college project
                  </p>
                  <button className='bg-indigo-500 py-3 px-9 text-white my-5 focus:outline-none rounded-full focus:border-indigo-500 focus:bg-transparent focus:text-indigo-600 border-2 focus:border-blue mr-5 hidden md:flex'>
                    View repository
                  </button>
                </div>

                <div className='flex md:w-1/2 w-full mt-8 md:mt-0 content-center justify-center'>
                  <img
                    src='images/new_project.png'
                    className='w-full'
                    alt='lumah shop is a shoe store, build with java with hibernate and jsf'
                  />
                </div>
              </div>

              <div className='flex flex-col justify-center my-24'>
                <div className='flex justify-center w-full my-3'>
                  <h1 className='text-2xl md:text-5xl font-bold text-gray-600'>
                    Web based project
                  </h1>
                </div>
                <div className='flex w-full justify-center flex-wrap'>
                  <CardImage
                    projectDescription='Web enjoy travel contain information about destination in indonesia. Build with java servlet and tailwindcss'
                    projectName='Enjoy travel'
                    projectUrl=''
                    imagePath='images/ui.png'
                  />
                  <CardImage
                    projectDescription='Yayasan indonesia berbagi(fiktif) app is web application for collection of donation. Build with laravel'
                    projectName='Yayasan indagi'
                    projectUrl=''
                    imagePath='images/indagi.png'
                  />
                  <CardImage
                    projectDescription='Web for seacrh text from youtube video (API from other people). Build with vuejs and vuetify'
                    projectName='TextFromVid'
                    projectUrl=''
                    imagePath='images/search_text.png'
                  />
                  <CardImage
                    projectDescription='Is web for collecting report from public. Build with laravel'
                    projectName='Pengaduan masyarakat'
                    projectUrl=''
                    imagePath='images/pengaduan_masyarakat.jpg'
                  />
                </div>
              </div>

              <div className='flex flex-col justify-center my-24'>
                <div className='flex justify-center w-full my-3'>
                  <h1 className='text-2xl md:text-5xl font-bold text-gray-600'>
                    Mobile based project
                  </h1>
                </div>
                <div className='flex w-full justify-center flex-wrap'>
                  <CardImage
                    projectDescription='Smartopname is app for entry data presensi and more (Private app)'
                    projectName='Smartopname'
                    projectUrl=''
                    imagePath='images/smartopname.png'
                  />
                  <CardImage
                    projectDescription='Harsa is app for checking price on building (Private app)'
                    projectName='Harsa'
                    projectUrl=''
                    imagePath='images/harsa.png'
                  />
                </div>
              </div>

              <div className='hidden  flex-col justify-center my-24'>
                <div className='flex justify-center w-full my-3'>
                  <h1 className='text-5xl'>Interface design project</h1>
                </div>
                <div className='flex w-full justify-center flex-wrap'>
                  <CardImage
                    projectDescription='Design page for web searching text from video'
                    projectName='search page design'
                    projectUrl=''
                    imagePath='images/ui.png'
                  />
                </div>
              </div>
            </SRLWrapper>

            <div className='bg-white hidden mx-10 justify-center  flex-wrap flex-col p-5 rounded-xl shadow-2xl mb-5'>
              <div className='w-full flex'>
                <div className='flex flex-col w-2/5'>
                  <h1 className='text-5xl mb-5'>Contact me</h1>
                  <p className='text-gray-500'>
                    If you want talk or meet with me. you can contact me in
                    several social media in right side of this paragraph
                  </p>
                </div>
                <div className='w-3/5'></div>
              </div>
            </div>

            <div className='flex w-full justify-center my-8'>
              <div className='h-1 bg-indigo-500 w-24 flex self-center'></div>
              <h1 className='text-gray-500 mx-4 text-center'>
                Lutfi Alamsyah 2021
              </h1>
              <div className='h-1 bg-indigo-500 w-24 flex self-center'></div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
