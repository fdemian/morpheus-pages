import React from 'react';
import { Button, Card } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import './DownloadLinks.css';

const DownloadLinks = () => {

  return(
  <div className="download-links-wrapper">
    <Card bordered={true}>
      <h1>Download latest build (23/05/2020)</h1>
      <br />
      <Button
        type="primary"
        shape="round"
        icon={<DownloadOutlined />}
        size='large'
      >
        Download
      </Button>
    </Card>
  </div>
  );
}

export default DownloadLinks;
