import React from 'react';
import { Button, Card } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import './DownloadLinks.css';

const fileUrl = "https://github.com/fdemian/morpheus-pages/raw/master/src/Morpheus-Build_5-9-2020.zip";

const DownloadLinks = () => {

  return(
  <div className="download-links-wrapper">
    <Card bordered={true}>
      <h1>Download latest build (05/09/2020)</h1>
      <br />
      <a href={fileUrl}>
        <Button
          type="primary"
          shape="round"
          icon={<DownloadOutlined />}
          size='large'
        >
          Download
        </Button>
      </a>
    </Card>
  </div>
  );
}

export default DownloadLinks;
