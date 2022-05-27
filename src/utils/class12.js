import {FcBiohazard,FcCalculator,FcScatterPlot,FcIdea,FcMultipleDevices,FcDocument,FcBbc,FcSoundRecordingCopyright} from 'react-icons/fc'
import math from '../Assests/class12/maths.jpg';
import urdu from '../Assests/class12/urdu.jpg';
import chemistry from '../Assests/class12/chemistry.jpg';
import biology from '../Assests/class12/biology.jpg';
import physics from '../Assests/class12/physics.jpg';
import computer from '../Assests/class12/computer.jpg';
import english2 from '../Assests/class12/book2.jpg';
import ps from '../Assests/class12/pak.jpg';

const TwelveClassData = [
    {
      id:'1',
      name: "Biology",
      author:'abc',
      edition: '2017',
      downloads:'35,566',
      image:biology,
      icon:<FcBiohazard/>,
      book: "https://drive.google.com/file/d/1vRZjNczV577VB7I5AQRMqaG3yoO0mcN_/view?usp=sharing",
      keybook:"https://drive.google.com/file/d/1SyAY2nfRKsiEdJPZlorTXv89N31FhtuN/view?usp=sharing",
    },
    {
      
      id:'2',
      name: "Chemistry",
      author:'abc',
      edition: '2017',
      downloads:'35,566',
      image:chemistry,
      icon:<FcScatterPlot/>,
      book: "https://drive.google.com/file/d/1mMlfaOFDhcRLouoB-t8T86DQJIaYOL-w/view?usp=sharing",
      keybook:"https://drive.google.com/file/d/1xYwgZkLEsAFpuxtYEnuz8_wQPLfD_69d/view?usp=sharing",
    },
    {
      id:'3',
      name: "Computer Science",
      author:'Dr.Safia Iftikhar',
      edition: '2018-2019',
      downloads:'35,566',
      image:computer,
       icon:<FcMultipleDevices/>,
      book: "https://drive.google.com/file/d/1NMmo-bY9O3vKtGu3aAlq2-n5fdKY6GCI/view?usp=sharing",
      keybook:"https://drive.google.com/file/d/11Y2rVc83dROQCxFVuFwIt6VNeXhCdJSO/view?usp=sharing",
    },
    {
      id:'3',
      name: "English Book 2",
      author:'Rafique Ahmad',
      edition: '2018-2019',
      downloads:'35,566',
      image:english2,
       icon:<FcBbc/>,
      book: "https://drive.google.com/file/d/1zVReI1zKReIPRM2iPE0f7xy2vRqUCUK7/view?usp=sharing",
      keybook:"https://drive.google.com/file/d/1pV9YJyI9bqAaBIeViLyQb5MdccWeabY-/view?usp=sharing",
    },
    {
      id:'4',
      name: "Mathematics",
      author:'M.D Phillips',
      edition: '2018-2019',
      downloads:'35,566',
      icon:<FcCalculator/>,
      image:math,
      book: "https://drive.google.com/file/d/1UamK1_z7oCT4foXSuiOwM2NNwjy9jdst/view?usp=sharing",
      keybook:"https://drive.google.com/file/d/1m4p8rfo-uk1Ojbfb9AltV5MdUfwpPZEe/view?usp=sharing",
    },
    {
      id:'5',
      name: "Pak Studies",
      author:'Muhammad Zubair Saahi',
      edition: '2018-2019',
      downloads:'35,566',
      image:ps,
      icon:<FcSoundRecordingCopyright/>,
        book: "https://drive.google.com/file/d/1iNh2ZRKXsOCBxXOf_nABQSKg_iD34atS/view?usp=sharing",
        keybook:"https://drive.google.com/file/d/1jeHCKEOHAktkK3UY9xsiDm5dIznVmwKT/view?usp=sharing",
    },
    {
      id:'6',
      name: "Physics",
      author:'Prof.Muhammad Nasir',
      edition: '2016-2017',
      downloads:'35,566',
      image:physics,
      icon:<FcIdea/>,
      book: "https://drive.google.com/file/d/1KjzVCaJZV8Cok1Alu86jr60vIzbfcSt6/view?usp=sharing",
      keybook:"https://drive.google.com/file/d/16Jw88WxAdHI9ihQEVD_oDnNTFR0U6QIz/view?usp=sharing",
    },
    {
      id:'7',
      name: "Urdu",
      author:'Muhammad Zubair Saahi',
      edition: '2018-2019',
      downloads:'35,566',
      image:urdu,
      icon:<FcDocument/>,
      book: "https://drive.google.com/file/d/1VP_3JsNddYChP38ySOLm3Dp7obJkeeNX/view?usp=sharing",
      keybook:"https://drive.google.com/file/d/1D06VyILtQ42c71QSQ3xErH0RSpECguAg/view?usp=sharing",
    },
  ];
  
  export default TwelveClassData;