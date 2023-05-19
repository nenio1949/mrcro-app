import React from 'react';
import {
  ProjectOutlined,
  DatabaseOutlined,
  InsertRowAboveOutlined,
  ToolOutlined,
  TabletOutlined,
} from '@ant-design/icons';
const menuData = [
  {
    key: 'use-case',
    label: '基础用例库管理',
    link: '/use-case',
    icon: <DatabaseOutlined />,
  },
  {
    key: 'test-table-template',
    label: '测试表格模板管理',
    link: '/test-table-template',
    icon: <InsertRowAboveOutlined />,
  },
  {
    key: 'test-sequence-template',
    label: '测试序列模板管理',
    link: '/test-sequence-template',
    icon: <TabletOutlined />,
  },

  {
    key: 'laboratory-test',
    label: '实验室测试',
    icon: <ProjectOutlined />,
    children: [
      {
        key: 'laboratory-test_use-case',
        label: '用例管理',
        link: '/laboratory-test/use-case',
      },
      {
        key: 'laboratory-test_project-version',
        label: '数据统计',
        link: '/laboratory-test/project-version',
      },
      {
        key: 'laboratory-test_test-table',
        label: '测试表格管理',
        link: '/laboratory-test/test-table',
      },
      {
        key: 'laboratory-test_test-report',
        label: '测试报告管理',
        link: '/laboratory-test/test-report',
      },
      {
        key: 'laboratory-test_combine-investigation',
        label: '室内综合联调',
        link: '/laboratory-test/combine-investigation',
      },
    ],
  },
  {
    key: 'spot-test',
    label: '现场测试',
    icon: <ToolOutlined />,
    children: [
      {
        key: 'spot-test_use-case',
        label: '用例管理',
        link: '/spot-test/use-case',
      },
      {
        key: 'spot-test_project-version',
        label: '数据统计',
        link: '/spot-test/project-version',
      },
      {
        key: 'spot-test_test-table',
        label: '测试表格管理',
        link: '/spot-test/test-table',
      },
      {
        key: 'spot-test_combine-investigation',
        label: '现场综合联调',
        link: '/spot-test/combine-investigation',
      },
      {
        key: 'spot-test_test-sequence',
        label: '测试序列管理',
        link: '/spot-test/test-sequence',
      },
    ],
  },
];

export default menuData;
