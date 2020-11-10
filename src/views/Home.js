import React, { useEffect, useState } from "react";
import { Card, Col, Row, Select, Spin, Typography } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined
} from "@ant-design/icons";
import { orderBy } from "lodash";

import CampaignItem from "../components/CampaignItem/CampaignItem";
import CampaignDetail from "../components/CampaignDetail/CampaignDetail";

const { Paragraph, Text } = Typography;

const Home = (props) => {
  const [loading, setLoading] = useState(false);
  const [campaignList, setCampaignList] = useState([]);

  const [showDetail, setShowDetail] = useState(false);
  const [shownCampaign, setShownCampaign] = useState(null);

  const [sortBy, setSortBy] = useState("donation_target");

  useEffect(() => {
    setLoading(true);
    fetch(
      "https://cors-anywhere.herokuapp.com/https://storage.googleapis.com/southern-waters-642.appspot.com/fe_code_challenge/campaign.json"
    )
      .then((resp) => resp.json())
      .then((res) => {
        console.log(res);
        const sortedData = orderBy(res.data, sortBy, "desc");
        setCampaignList(sortedData);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (campaignList.length) {
      setLoading(true);
      setTimeout(() => {
        const sortedData = orderBy(campaignList, sortBy, "desc");
        setCampaignList(sortedData);
        setLoading(false);
      }, 1000);
    }
  }, [sortBy]);

  const getDetail = (id) => {
    setShowDetail(true);
    const filtered = campaignList.filter((x) => x.id === id);
    setShownCampaign(filtered[0]);
  };

  const closeDetail = () => {
    setShownCampaign(null);
    setShowDetail(false);
  };

  return (
    <div>
      <header>
        <nav className="container py-3">
          <Row>
            <Col xs={8} sm={16}>
              Kitabisa
            </Col>
            <Col xs={16} sm={8} className="text-right">
              <Select
                disabled={loading}
                onChange={(e) => setSortBy(e)}
                value={sortBy}
              >
                <Select.Option value="donation_target">
                  Sort by Donation Target
                </Select.Option>
                <Select.Option value="donation_received">
                  Sort by Donation Received
                </Select.Option>
              </Select>
            </Col>
          </Row>
        </nav>
      </header>
      <main>
        <div className="container">
          <CampaignDetail
            visible={showDetail}
            campaignData={shownCampaign}
            closeHandler={closeDetail}
          />
          {loading ? (
            <div className="text-center p-5">
              <Spin size="large" />
            </div>
          ) : !loading && campaignList.length ? (
            <Row gutter={12}>
              {campaignList.map((el) => (
                <Col key={el.id} sm={8}>
                  <CampaignItem
                    image={el.image}
                    clickHandler={() => getDetail(el.id)}
                    title={el.title}
                    donation_received={el.donation_received}
                    donation_target={el.donation_target}
                    donation_percentage={el.donation_percentage}
                    days_remaining={el.days_remaining}
                  />
                </Col>
              ))}
            </Row>
          ) : (
            <div className="text-center p-5">
              <Paragraph>
                <Text type="danger">Not Found</Text>
              </Paragraph>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Home;
