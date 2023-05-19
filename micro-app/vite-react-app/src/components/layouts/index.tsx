import React, { Component } from 'react';
// import HeaderUnit from './header';
import SidebarUnit from './sidebar';
import './common.less';

const LayoutUnit = (WrappedComponent: any) => {
  class HOC extends Component<any> {
    constructor(props: any) {
      super(props);
    }

    render() {
      return (
        <div style={{ display: 'flex', height: '100%' }}>
          <div className="d-layout-body-container-left">
            <SidebarUnit />
          </div>
          <div className="d-layout-body-container-right">
            <WrappedComponent {...this.props} />
          </div>
        </div>
      );
    }
  }

  return HOC;
};

export default LayoutUnit;
