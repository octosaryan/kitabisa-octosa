import React, { useEffect } from "react";
import { Col, Divider, Modal, Progress, Row, Tooltip, Typography } from "antd";
import moment from "moment";

import { formatCurrency } from "../../assets/js/utils";

const { Paragraph } = Typography;

const CampaignDetail = (props) => {
  const { visible, campaignData, closeHandler } = props;

  useEffect(() => {
    console.log(campaignData);
  }, [campaignData]);

  return (
    <Modal
      width={600}
      title={campaignData !== null ? campaignData.title : ""}
      visible={visible}
      okButtonProps={{ hidden: true }}
      onCancel={closeHandler}
    >
      {campaignData !== null && (
        <div>
          <img
            width="100%"
            className="d-block mx-auto mb-4"
            src={campaignData.image}
            alt={campaignData.title}
          />
          <Tooltip
            title={`${formatCurrency(
              campaignData.donation_received,
              "Rp. "
            )} dari ${formatCurrency(campaignData.donation_target, "Rp. ")}`}
          >
            <Progress
              percent={campaignData.donation_percentage * 100}
              showInfo={false}
            />
          </Tooltip>
          <Row gutter={16}>
            <Col sm={24}>
              Terkumpul {formatCurrency(campaignData.donation_received, "Rp. ")}{" "}
              dari target {formatCurrency(campaignData.donation_target, "Rp. ")}
            </Col>
            <Col sm={24}>
              {/* Terakhir tanggal :{" "}
              {moment(campaignData.expired).format("DD-MM-YYYY HH:mm:ss")}{" "} */}
              <br />
              Sisa {campaignData.days_remaining} Hari
            </Col>
          </Row>
          <Divider orientation="left">Informasi Penggalang Dana</Divider>
          <Paragraph>Penggalang Dana : {campaignData.campaigner}</Paragraph>
        </div>
      )}
    </Modal>
  );
};

export default CampaignDetail;
