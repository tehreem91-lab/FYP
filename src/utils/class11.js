import {FcBiohazard,FcCalculator,FcScatterPlot,FcIdea,FcMultipleDevices,FcDocument,FcFactoryBreakdown,FcBbc,FcSound} from 'react-icons/fc';
import math from '../Assests/class11/math.png';
import urdu from '../Assests/class11/urdu.png';
import chemistry from '../Assests/class11/chemistry.PNG';
import biology from '../Assests/class11/biology.jpg';
import physics from '../Assests/class11/physics.jpg';
import computer from '../Assests/class11/computer.jpg';
import english1 from '../Assests/class11/english book1.jpg';
import english3 from '../Assests/class11/english book3.jpg';
import islamiat from '../Assests/class11/islamiat.png';

const ElevenClassData = [
    {
        id:'1',
      name: "Biology",
      author:'Prof.Javaid Iqbal',
      edition: '2017',
      downloads:'35,566',
      image:biology,
      icon:<FcBiohazard/>,
      book: "https://drive.google.com/file/d/1j2oCr3hsCeKzRMF0lWeNs0I7-dfIFr5Y/view?usp=sharing",
      keybook:"https://drive.google.com/file/d/1U0rdrjz6CIsVFM0mR4TZcxfiEOkqq8v7/view?usp=sharing",
    },
    {
        id:'2',
      name: "Chemistry",
      author:'Prof.Akbar Hussain',
      edition: '2016-2017',
      downloads:'35,566',
      image:chemistry,
      icon:<FcScatterPlot/>,
      book: "https://drive.google.com/file/d/1GIMl4wS4wor8LE02gnz4c5F28ygdVk_Y/view?usp=sharing",
      keybook:"https://drive.google.com/file/d/1IZMtdiSsZxTO2l3JOegeUJtW2uxOiau0/view?usp=sharing",
    },
    {
        id:'3',
      name: "Computer Science",
      author:'Dr.Safia Iftikhar',
      edition: '2018-2019',
      downloads:'35,566',
      image:computer,
       icon:<FcMultipleDevices/>,
      book: "https://drive.google.com/file/d/1ClpVT0wv9Ed7fwBvZekRoVdD7w4L87TQ/view?usp=sharing",
      keybook:"https://drive.google.com/file/d/1QaW4v-_qKB5Rv3ZFLQd7RaPav-IfAt6D/view?usp=sharing",
    },
    {
        id:'4',
      name: "English Book 1",
      author:'Bashir Ahmad chudhry',
      edition: '2018-2019',
      downloads:'35,566',
      image:english1,
      icon:<FcBbc/>,
      book: "https://drive.google.com/file/d/1CWHywQlS2riL-rAxIav4RsD4OFp7ODu-/view?usp=sharing",
      keybook:"https://drive.google.com/file/d/1rlIiYK-ldxZ1i5Ae0_ufPqyCgOMZRreN/view?usp=sharing",
    },
    {
        id:'5',
      name: "English Book 3",
      author:'Rafique Ahmad',
      edition: '2016-2017',
      downloads:'35,566',
      image:english3,
      icon:<FcBbc/>,
      book: "https://drive.google.com/file/d/1Zw_sXOLH9E-v0Sb6SDKL1DCRVWZnifmv/view?usp=sharing",
      keybook:"https://drive.google.com/file/d/1zYJrgcykGO_T19OJvPBx618mWDYKJf6G/view?usp=sharing",
    },
    {
        id:'6',
      name: "Islamiat",
      author:'Prof Hassan-ul-din Hashmi',
      edition: '2018-2019',
      downloads:'35,566',
      image:islamiat,
      icon:<FcFactoryBreakdown/>,
      book: "https://drive.google.com/file/d/1CrD6l-ZCC4WgMSGd0aVNvHseURngYEx3/view?usp=sharing",
      keybook:"https://drive.google.com/file/d/1eTUJ3AqZuXGcSPW1Srb7SYTO_0sXPj1D/view?usp=sharing",
    },
    {
        id:'7',
      name: "Mathematics",
      author:'M.D Phillips',
      edition: '2018-2019',
      downloads:'35,566',
      icon:<FcCalculator/>,
      image:math,
      book: "https://drive.google.com/file/d/1DLbZ7hjEIlWx442kfeKa9RyVhlAKSoDE/view?usp=sharing",
      keybook:"https://drive.google.com/file/d/11wKqym4njcphMmQfWCRgzpWaFVYZcM-Z/view?usp=sharing",
    },
    {
      id:'8',
      name: "Physics",
      author:'Prof.Muhammad Nasir',
      edition: '2016-2017',
      downloads:'35,566',
      icon:<FcIdea/>,
      image:physics,
      book: "https://drive.google.com/file/d/1Q0HOGjU7oGHVTUss7VyorO9W8wStf1pz/view?usp=sharing",
      keybook:"https://drive.google.com/file/d/1vFv9mWRI02RB2HPGqoiqxMTrPv94G62C/view?usp=sharing",
    },
    {
        id:'9',
      name: "Urdu",
      author:'Muhammad Zubair Saahi',
      edition: '2018-2019',
      downloads:'35,566',
      image:urdu,
      icon:<FcDocument/>,
      book: "https://drive.google.com/file/d/1cHYA4pZviz96kQmbVVXA2jM7Xxa9zYeT/view?usp=sharing",
      keybook:"https://drive.google.com/file/d/1loa0em5KY_wBGYJyOBV9wJoe_gK5kRfs/view?usp=sharing",
    },
  ];
  
  export default ElevenClassData;