import React from "react";
import { Card, Col, Progress, Row, Tooltip, Typography } from "antd";

import { formatCurrency } from "../../assets/js/utils";

const { Paragraph } = Typography;

const CampaignItem = (props) => {
  const {
    image,
    clickHandler,
    title,
    donation_received,
    donation_target,
    donation_percentage,
    days_remaining
  } = props;

  const formatCurrency = (int, prefix) => {
    let number_string = int.toString(),
      split = number_string.split("."),
      temp = split[0].length % 3,
      rupiah = split[0].substr(0, temp),
      thousand = split[0].substr(temp).match(/\d{3}/gi);

    if (thousand) {
      let separator = temp ? "." : "";
      rupiah += separator + thousand.join(".");
    }

    rupiah = split[1] !== undefined ? rupiah + "." + split[1] : rupiah;
    return prefix === undefined ? rupiah : rupiah ? "Rp. " + rupiah : "";
  };

  return (
    <Card
      hoverable
      cover={<img src={image} />}
      onClick={clickHandler}
      className="mb-3 campaign-item"
    >
      <Paragraph ellipsis={{ rows: 1 }}>{title}</Paragraph>
      <Tooltip
        title={`${formatCurrency(
          donation_received,
          "Rp. "
        )} dari ${formatCurrency(donation_target, "Rp. ")}`}
      >
        <Progress percent={donation_percentage * 100} showInfo={false} />
      </Tooltip>
      <Row gutter={16}>
        <Col xs={16} sm={24} md={16}>
          Terkumpul <br /> {formatCurrency(donation_received, "Rp. ")}
        </Col>
        <Col xs={8} sm={24} md={8} className="text-right">
          Sisa Hari <br /> {days_remaining}
        </Col>
      </Row>
    </Card>
  );
};

export default CampaignItem;
