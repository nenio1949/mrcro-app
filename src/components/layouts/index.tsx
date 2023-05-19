import React, { Component } from 'react';
import { Layout } from 'antd';
import { observer, inject } from 'mobx-react';
import HeaderUnit from './header';
import WarningUnit from '@/pages/common/warning';
import './common.less';

const { Header, Content } = Layout;

const LayoutUnit = (WrappedComponent: any) => {
  interface IProps {
    appStore?: any;
  }
  @inject('appStore')
  @observer
  class HOC extends Component<IProps> {
    constructor(props: any) {
      super(props);
    }

    render() {
      const { appStore }: any = this.props;
      if (appStore?.appLoading) {
        return (
          <WarningUnit
            mode="loading"
            data="科技向善，数据为先"
            style={{ fontSize: 24, paddingTop: '20%' }}
          />
        );
      }

      return (
        <Layout className="d-layout">
          <Header className="d-layout-header-container">
            <HeaderUnit {...this.props} />
          </Header>
          <Content className="d-layout-body-container">
            <WrappedComponent {...this.props} />
          </Content>
        </Layout>
      );
    }
  }

  return HOC;
};

export default LayoutUnit;
