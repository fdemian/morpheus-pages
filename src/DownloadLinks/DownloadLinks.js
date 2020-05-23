import React from 'react';
import { Button, Card } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import './DownloadLinks.css';

const fileName = "Morpheus_Build-5-2020.zip";
const fileUrl = "../" + fileName;

const DownloadLinks = () => {

 const downloadBuild = () => {
  fetch(fileUrl)
    .then(response => {
      response.blob().then(blob => {
        let url = window.URL.createObjectURL(blob);
        let a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        a.click();
      });
  });
}

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
        onClick={downloadBuild}
      >
        Download
      </Button>
    </Card>
  </div>
  );
}

export default DownloadLinks;
