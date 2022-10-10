import React, {useState} from 'react';
import {Popconfirm, Tooltip} from "antd";
import {datatype} from "../PluginView/PluginView";
import {headers} from "../../utils/PostRequestHeader/header";
import {ReloadOutlined} from "@ant-design/icons";
import Notification from "../Notification/Notification";
import config from "../../utils/config";

const Reload = ({item}: { item: datatype }) => {
    const [state, setState] = useState(false);
    const confirm = (item: datatype) => {
        setState(true);
        const options = {
            method: "POST",
            headers: {...headers},
            body: JSON.stringify(item)
        };
        fetch(`${config.apiPrefix}reload`, options)
            .then(res => res.json())
            .then(res => {
                if (res?.code === 200) {
                    Notification("success", `Reload Success`, `message: ${res.data}`);
                    setState(false);
                }
            });
    };

    return (
        <Popconfirm
            placement="topRight"
            title={"reload"}
            onConfirm={() => {
                confirm(item);
            }}
            okText="Y"
            cancelText="N"
        >
            <Tooltip placement="right" title="reload" color={"yellow"} key={"yellow"}>
                <ReloadOutlined spin={state} style={{color: "yellow"}}/>
            </Tooltip>
        </Popconfirm>
    );
};

export default Reload;

