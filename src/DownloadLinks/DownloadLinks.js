import React from 'react';
import { Button, Card } from 'antd';
import { Link } from 'react-router-dom';
import { DownloadOutlined } from '@ant-design/icons';
import './DownloadLinks.css';

const fileUrl = "https://github.com/fdemian/morpheus-pages/blob/master/src/Morpheus_Build-5-2020.zip";

const DownloadLinks = () => {

  return(
  <div className="download-links-wrapper">
    <Card bordered={true}>
      <h1>Download latest build (23/05/2020)</h1>
      <br />
      <Link to={fileUrl}>
        <Button
          type="primary"
          shape="round"
          icon={<DownloadOutlined />}
          size='large'
        >
          Download
        </Button>
      </Link>
    </Card>
  </div>
  );
}

export default DownloadLinks;
