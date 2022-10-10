import React from 'react';
import {notification} from 'antd';

type Notification = "success" | "error"

const Notification = (type: Notification, title: string, desc: string) => {
    notification[type]({
        message: title,
        description: desc,
        duration:
            2.5
    });
};

export default Notification;
