'use client';

import React, {useEffect, useState} from 'react';
import {Image, Typography} from '@douyinfe/semi-ui';

export const HomePage = () => {
  const [listApp, setListApp] = useState([]);
  const [listCategory, setListCategory] = useState([]);
  const [categorySelected, setCategorySelected] = useState('');
  // let width = screen.width;

  const initial = async () => {
    const responseApp = await fetch('https://napis.onrender.com/napis-apps');
    const responseCategory = await fetch(
      'https://napis.onrender.com/napis-categories'
    );
    const dataApp = await responseApp.json();
    const dataCategory = await responseCategory.json();
    setListApp(dataApp);
    setListCategory(dataCategory);
  };

  const filterPin = (list: any) => {
    let listPin: any = [];
    list?.map((item: any) => {
      if (item?.pin === '1') {
        listPin.push(item);
      }
    });
    return listPin;
  };

  const filterByCategory = () => {
    if (categorySelected === '') {
      return listApp;
    }
    let listFilter: any = [];
    listApp?.map((item: any) => {
      console.log(item?.category_id, categorySelected);

      if (item?.category_id === categorySelected) {
        listFilter.push(item);
      }
    });
    return listFilter;
  };

  const directTo = (url: string) => {
    window.open(url, '_blank');
  };

  useEffect(() => {
    initial();
  }, []);

  useEffect(() => {}, [listApp, listCategory, categorySelected]);

  if (false) {
    return (
      <div className="flex flex-col h-screen w-full">
        <div>
          <Image
            style={{width: '100%'}}
            src="https://i.pinimg.com/originals/67/51/e8/6751e887776f1f70640b57cdbea7d5d2.jpg"
            alt="error"
            className="w-full object-cover"
            preview={false}
          />
        </div>

        <div className="ml-[20px] mr-[20px] mt-3 flex items-center">
          <div className="border-b-2 pb-1 border-gray-200 flex items-center">
            <Image
              src="https://cdn-icons-png.flaticon.com/128/10263/10263272.png"
              style={{width: '16px', height: '16px'}}
              alt="favorite"
              preview={false}
            />
            <h1 className="font-medium ml-2 text-sm">Favourtie</h1>
          </div>
        </div>

        <div className="flex justify-start items-center flex-wrap mr-[20px] mt-[16px]">
          {filterPin(listApp)?.map((app: any, index: any) => (
            <div key={index} className="pl-[20px] w-1/2 pb-[20px]">
              <div
                onClick={() => directTo(app?.app_url)}
                className="!bg-white cursor-pointer hover:!opacity-50 flex items-center w-full py-3 pl-3 rounded-xl shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]"
              >
                <Image
                  src={app?.app_thumbnail}
                  style={{width: '40px', height: '40px', marginRight: '10px'}}
                  alt={app?.app_name}
                  preview={false}
                />
                <Typography className="font-medium ml-1 text-sm">
                  {app?.app_name}
                </Typography>
              </div>
            </div>
          ))}
        </div>

        <div className="ml-[20px] mr-[20px] flex items-center flex-wrap mt-4">
          <div
            onClick={() => setCategorySelected('')}
            className={`border-b-2 pb-1 ${
              categorySelected == '' ? 'border-blue-500' : 'border-gray-200'
            }  flex items-center mr-7 mb-3`}
          >
            <Image
              src="https://cdn-icons-png.flaticon.com/128/3405/3405818.png"
              style={{width: '16px', height: '16px'}}
              alt="all apps"
              preview={false}
            />
            <h1 className="font-medium ml-2 text-sm">All apps</h1>
          </div>
          {listCategory?.map((category: any, index: any) => (
            <div
              key={index}
              className={`border-b-2 pb-1 ${
                categorySelected == category?.category_id
                  ? 'border-blue-500'
                  : 'border-gray-200'
              } flex items-center mr-7 mb-3 cursor-pointer hover:!opacity-50`}
              onClick={() => setCategorySelected(category?.category_id)}
            >
              <Image
                src={
                  category?.category_thumbnail ||
                  'https://cdn-icons-png.flaticon.com/128/7734/7734301.png'
                }
                style={{width: '16px', height: '16px'}}
                alt="all apps"
                preview={false}
              />
              <h3 className="font-medium ml-2 text-sm">
                {category?.category_name}
              </h3>
            </div>
          ))}
        </div>

        <div className="flex justify-start items-center flex-wrap mr-[20px] mt-[10px]">
          {filterByCategory()?.map((app: any, index: any) => (
            <div key={index} className="pl-[20px] w-1/2 pb-[20px]">
              <div
                onClick={() => directTo(app?.app_url)}
                className="!bg-white cursor-pointer hover:!opacity-50 flex items-center w-full py-3 pl-3 rounded-xl shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]"
              >
                <Image
                  src={
                    app?.app_thumbnail ||
                    'https://cdn-icons-png.flaticon.com/128/7734/7734301.png'
                  }
                  style={{width: '40px', height: '40px', marginRight: '10px'}}
                  alt="error"
                  preview={false}
                />
                <Typography className="font-medium ml-1 text-sm">
                  {app?.app_name}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen w-full pr-[120px] pl-[120px]">
      <div className="w-full pl-[20px] pr-[20px]">
        <div>
          <Image
            style={{width: '100%'}}
            src="https://i.pinimg.com/originals/67/51/e8/6751e887776f1f70640b57cdbea7d5d2.jpg"
            alt="error"
            className="w-full object-cover"
            preview={false}
          />
        </div>
      </div>

      <div className="ml-[20px] mr-[20px] mt-5 flex items-center ">
        <div className="border-b-2 pb-1 border-gray-200 flex items-center">
          <Image
            src="https://cdn-icons-png.flaticon.com/128/10263/10263272.png"
            style={{width: '16px', height: '16px'}}
            alt="favorite"
            preview={false}
          />
          <h1 className="font-medium ml-2 text-sm">Favourtie</h1>
        </div>
      </div>

      <div className="flex justify-start items-center flex-wrap mr-[20px] mt-[24px]">
        {filterPin(listApp)?.map((app: any, index: any) => (
          <div key={index} className="pl-[20px] w-1/6 pb-[20px]">
            <div
              onClick={() => directTo(app?.app_url)}
              className="!bg-white cursor-pointer hover:!opacity-50 flex items-center w-full py-3 pl-3 rounded-xl shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]"
            >
              <Image
                src={app?.app_thumbnail}
                style={{width: '40px', height: '40px', marginRight: '10px'}}
                alt={app?.app_name}
                preview={false}
              />
              <Typography className="font-medium ml-1 text-sm">
                {app?.app_name}
              </Typography>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full mt-5">
        <div className="ml-[20px] mr-[20px] flex items-center">
          <div
            className={`border-b-2 pb-1 ${
              categorySelected == '' ? 'border-blue-500' : 'border-gray-200'
            } flex items-center mr-7 cursor-pointer hover:!opacity-50`}
            onClick={() => setCategorySelected('')}
          >
            <Image
              src="https://cdn-icons-png.flaticon.com/128/3405/3405818.png"
              style={{width: '16px', height: '16px'}}
              alt="all apps"
              preview={false}
            />
            <h1 className="font-medium ml-2 text-sm">All apps</h1>
          </div>
          {listCategory?.map((category: any, index: any) => (
            <div
              key={index}
              className={`border-b-2 pb-1 ${
                categorySelected == category?.category_id
                  ? 'border-blue-500'
                  : 'border-gray-200'
              } flex items-center mr-7 cursor-pointer hover:!opacity-50`}
              onClick={() => setCategorySelected(category?.category_id)}
            >
              <Image
                src={
                  category?.category_thumbnail ||
                  'https://cdn-icons-png.flaticon.com/128/7734/7734301.png'
                }
                style={{width: '16px', height: '16px'}}
                alt="all apps"
                preview={false}
              />
              <h3 className="font-medium ml-2 text-sm">
                {category?.category_name}
              </h3>
            </div>
          ))}
        </div>

        <div className="flex justify-start items-center flex-wrap mr-[20px] mt-[24px]">
          {filterByCategory()?.map((app: any, index: any) => (
            <div key={index} className="pl-[20px] w-1/6 pb-[20px]">
              <div
                onClick={() => directTo(app?.app_url)}
                className="!bg-white cursor-pointer hover:!opacity-50 flex items-center w-full py-3 pl-3 rounded-xl shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]"
              >
                <Image
                  src={
                    app?.app_thumbnail ||
                    'https://cdn-icons-png.flaticon.com/128/7734/7734301.png'
                  }
                  style={{width: '40px', height: '40px', marginRight: '10px'}}
                  alt="error"
                  preview={false}
                />
                <Typography className="font-medium ml-1 text-sm">
                  {app?.app_name}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full">
        <div className="w-full h-[100px] !bg-white"></div>
      </div>
    </div>
  );
};
