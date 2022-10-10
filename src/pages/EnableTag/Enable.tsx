import React from 'react';
import {Popconfirm, Tooltip} from 'antd';
import {CheckOutlined} from "@ant-design/icons";
import {datatype} from "../PluginView/PluginView";
import {headers} from "../../utils/PostRequestHeader/header";
import Notification from "../Notification/Notification";
import config from "../../utils/config";

const Enable = ({item, setdata}: { item: datatype, setdata: (...args: Array<any>) => void }) => {
    const confirm = (item: datatype, setdata: (...args: Array<any>) => void) => {
        const options = {
            method: "POST",
            headers: {...headers},
            body: JSON.stringify(item)
        };
        fetch(`${config.apiPrefix}enable`, options)
            .then(res => res.json())
            .then(res => {
                if (res.code === 200)
                    Notification("success", "EnabledPlugin", res.data);
                else if (res.code === 400)
                    Notification("error", "ERR", res.data);
                setdata(res.List);
            });
    };

    return (
        <Popconfirm
            placement="topRight"
            title={"Confirm Enable"}
            onConfirm={() => {
                confirm(item, setdata);
            }}
            okText="Y"
            cancelText="N"
        >
            <Tooltip placement="right" title="Enable" color={'#87d068'} key={'#87d068'}>
                <CheckOutlined style={{color: "green"}}/>

            </Tooltip>

        </Popconfirm>

    );
};

export default Enable;