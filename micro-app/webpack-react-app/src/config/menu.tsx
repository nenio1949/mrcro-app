import React from 'react';
import {
  ProjectOutlined,
  DatabaseOutlined,
  InsertRowAboveOutlined,
  ToolOutlined,
  RobotOutlined,
  SettingOutlined,
  TabletOutlined,
  PieChartOutlined,
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
  {
    key: 'defect',
    label: '缺陷管理',
    link: '/defect',
    icon: <RobotOutlined />,
    children: [
      {
        key: 'defect_confirm-test',
        label: '确认测试缺陷管理',
        link: '/defect/confirm-test',
      },
      {
        key: 'defect_comprehensive',
        label: '综合联调缺陷管理',
        link: '/defect/comprehensive',
      },
    ],
  },

  {
    key: 'statistics',
    label: '数据统计',
    link: '/statistics',
    icon: <PieChartOutlined />,
    children: [
      {
        key: 'statistics_day-count',
        label: '日测试量统计',
        link: '/statistics/day-count',
      },
      {
        key: 'statistics_test-result-count',
        label: '项目测试结果统计',
        link: '/statistics/test-result-count',
      },
      {
        key: 'statistics_defect-count',
        label: '项目缺陷统计',
        link: '/statistics/defect-count',
      },
    ],
  },
  {
    key: 'console',
    label: '控制台',
    icon: <SettingOutlined />,
    children: [
      {
        key: 'console_setting-auth',
        label: '权限配置',
        link: '/console/setting-auth',
      },
      {
        key: 'console_setting-project-person',
        label: '项目人员',
        link: '/console/setting-project-person',
      },
      {
        key: 'console_setting-project',
        label: '项目设置',
        link: '/console/setting-project',
      },
      {
        key: 'console_setting-message',
        label: '模版变更通知配置',
        link: '/console/setting-message',
      },
    ],
  },
];

export default menuData;
