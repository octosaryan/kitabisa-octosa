import React, { useEffect, useState } from "react";
import { Card, Col, Menu, Progress, Row, Spin } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined
} from "@ant-design/icons";

const Home = (props) => {
  const [loading, setLoading] = useState(false);
  const [campaignList, setCampaignList] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch(
      "https://cors-anywhere.herokuapp.com/https://storage.googleapis.com/southern-waters-642.appspot.com/fe_code_challenge/campaign.json"
    )
      .then((resp) => resp.json())
      .then((res) => {
        console.log(res);
        setCampaignList(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <header>
        <nav className="container">
          <Row>
            <Col sm={16}>Kitabisa</Col>
            <Col sm={8} className="text-right">
              Sort
            </Col>
          </Row>
        </nav>
      </header>
      <main>
        <div className="container">
          {loading ? (
            <Spin size="large" />
          ) : !loading && campaignList.length ? (
            <Row gutter={12}>
              {campaignList.map((el) => (
                <Col key={el.id} sm={8}>
                  <Card
                    hoverable
                    cover={<img src={el.image} />}
                    onClick={() => alert(el.id)}
                    className="mb-3"
                  >
                    {el.title}
                    <Progress
                      percent={el.donation_percentage * 100}
                      showInfo={false}
                    />
                    <Row gutter={16}>
                      <Col sm={16}>
                        Terkumpul <br /> {el.donation_received}
                      </Col>
                      <Col sm={8}>
                        Sisa Hari <br /> {el.days_remaining}
                      </Col>
                    </Row>
                  </Card>
                </Col>
              ))}
            </Row>
          ) : (
            "No Data"
          )}
        </div>
      </main>
    </div>
  );
};

export default Home;
