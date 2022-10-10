import React, {useEffect, useState} from 'react';
import {Spin, Table, Tag} from 'antd';
import {ColumnsType} from 'antd/lib/table';
import Disable from '../DisableTag/Disable';
import Enable from '../EnableTag/Enable';
import './index.css';
import Reload from '../ReloadTag/Reload';

export interface datatype {
    key: any;
    PluginName: any;
    status: boolean
}

const PluginView = () => {
    const [loading, setLoading] = useState(true);
    const [data, setdata] = useState([]);
    const columns: ColumnsType<datatype> = [
        {
            key: 'PluginName',
            title: 'PluginName',
            dataIndex: 'PluginName',
        },
        {
            key: 'triggercommand',
            title: 'trigger',
            dataIndex: 'triggercmd',
        },
        {
            key: 'Event',
            title: 'Event',
            dataIndex: 'event',
        },
        {
            key: 'Status',
            title: 'Status',
            dataIndex: 'status',
            render: (status: boolean) => {
                return status ? <Tag color="success">Enable</Tag> : <Tag color="error">Disable</Tag>;
            },
        },
        {
            key: 'Handle',
            title: '操作',
            dataIndex: 'status',
            render: (status: boolean, item: datatype) => {
                return status ?
                    <div>
                        <Disable item={item} setdata={setdata}/> <Reload item={item}/>
                    </div> :
                    <Enable item={item} setdata={setdata}/>;
            },
        },

    ];

    useEffect(() => {
        fetch('http://127.0.0.1:8088/api/PluginList')
            .then((res) => res.json())
            .then((res) => {
                setLoading(false);
                setdata(res.data);
            });
    }, []);

    return (
        <Spin spinning={loading}><Table columns={columns} dataSource={data} className={'pluginList'}/></Spin>
    );
};

export default PluginView;
