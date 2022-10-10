import React from 'react';
import {Popconfirm, Tooltip} from 'antd';
import {datatype} from '../PluginView/PluginView';
import {StopOutlined} from '@ant-design/icons';
import {headers} from '../../utils/PostRequestHeader/header';
import Notification from '../Notification/Notification';
import config from "../../utils/config";

const Disable = ({item, setdata}: { item: datatype, setdata: (...args: Array<any>) => void }) => {
    const confirm = (item: datatype, setdata: (...args: Array<any>) => void) => {
        console.log(item.PluginName);
        const options = {
            method: 'POST',
            headers: {...headers},
            body: JSON.stringify(item)
        };
        fetch(`${config.apiPrefix}disable`, options)
            .then(res => res.json())
            .then(res => {
                if (res.code === 200)
                    Notification('success', 'DisabledPlugin', res.data);
                else if (res.code === 400)
                    Notification('error', 'ERR', res.data);
                setdata(res.List);
            });
    };

    return (
        <Popconfirm
            placement="topRight"
            title={'Disable'}
            onConfirm={() => {
                confirm(item, setdata);
            }}
            okText="Y"
            cancelText="N"
        >
            <Tooltip placement="right" title="Disable" color={'red'} key={'red'}>
                <StopOutlined style={{color: 'red'}}/>
            </Tooltip>
        </Popconfirm>
    );
};

export default Disable;