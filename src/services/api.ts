/*
 * @Description: 接口配置
 * @Author: yong.li
 * @Date: 2022-01-21 15:59:03
 * @LastEditors: yong.li
 * @LastEditTime: 2022-06-17 13:58:41
 */
import axios from './request';
/** --------------------------------------------------------公共请求开始-------------------------------------------- */

/** 登录 */
const login = async (datas: object) => {
  return axios('/api/jwt/login', 'POST', datas);
};
/** 刷新token */
const refreshToken = async (datas: any) => {
  return axios('/api/jwt/refresh_token', 'POST', datas);
};
/** 获取七牛token */
const getQiniuToken = async () => {
  return axios('/api/web/qiniu', 'GET', null);
};
/** 获取当前登录人员的所有项目 */
const getProjects = async () => {
  return axios('/api/web/projects', 'GET');
};
/** 获取当前登录人员的所有项目 */
const getAllProjects = async () => {
  return axios('/api/web/projects', 'GET', {
    type: 'all',
  });
};
/** 获取配置项 */
const getConfigurations = async (type: string) => {
  return axios(`/api/web/configurations?type=${type}`, 'GET', null);
};
/** 更新自己的密码 */
const changePassword = async (datas: object) => {
  return axios('/api/web/password', 'POST', datas);
};
/** 获取忘记密码的验证码 */
const getResetPasswordSmsCode = async (datas: object) => {
  return axios('/share-api/sms-code', 'POST', datas);
};
/** 重置密码 */
const resetPassword = async (datas: object) => {
  return axios('/share-api/reset-password', 'POST', datas);
};
/** 获取当前是否有文件正在解析 */
const getTaskProcess = async () => {
  return axios('/api/web/process', 'GET', null);
};
/** 获取全部岗位 */
const getPosts = async () => {
  return axios('/api/web/posts', 'GET', null);
};
/** 获取全部标准岗位 */
const getStandardPosts = async () => {
  return axios('/api/web/standard-posts', 'GET', null);
};
/** 创建项目人员 */
const createProjectUser = async (projectId: number, datas: object) => {
  return axios(`/api/web/project/${projectId}/user`, 'POST', datas);
};
/** 修改项目人员 */
const updateProjectUser = async (
  projectId: number,
  userId: number,
  datas: object
) => {
  return axios(`/api/web/project/${projectId}/users/${userId}`, 'POST', datas);
};
/** 获取所有权限 */
const getAuthorities = async () => {
  return axios('/api/web/authorities', 'GET', null);
};
/** 获取指定权限 */
const getAuthoritie = async (id: number) => {
  return axios(`/api/web/authorities/${id}`, 'GET', null);
};
/** 修改指定权限 */
const updateAuthoritie = async (id: number, datas: object) => {
  return axios(`/api/web/authorities/${id}`, 'POST', datas);
};
/** 获取当前用户的权限 */
const getUserAuthorities = async (datas: object) => {
  return axios('/api/web/user/authorities/', 'GET', datas);
};
/** 获取项目人员 */
const getProjectUsers = async (projectId: number, datas: object) => {
  return axios(`/api/web/project/${projectId || 0}/users`, 'GET', datas);
};
/** 设置有效项目 */

const setStartProjects = async (datas: any) => {
  return axios(`/api/web/projects`, 'POST', datas);
};

/** 获取消息推送范围 */
const getSettingMessage = async () => {
  return axios(`/api/web/message`, 'GET');
};
/** 配置消息通知范围 */
const settingMessage = async (datas: any) => {
  return axios(`/api/web/message`, 'POST', datas);
};

/** --------------------------------------------------------公共请求结束-------------------------------------------- */

/** --------------------------------------------------------基础用例库管理开始-------------------------------------------- */
/** 获取基础用例库列表 */
const getUseCases = async (datas: object) => {
  return axios('/api/web/templates', 'GET', datas);
};
/** 下载用例 */
const downloadUseCase = async (id: number) => {
  return axios(`/api/web/templates/${id}/template?type=case`, 'GET', null, {
    'Content-Type': 'application/x-www-form-urlencoded',
  });
};
/** 创建基础用例库 */
const createUseCase = async (datas: any) => {
  return axios('/api/web/template', 'POST', datas, {
    'Content-Type': 'application/x-www-form-urlencoded',
  });
};
/** 更新基础用例库 */
const updateUseCase = async (id: number, datas: any) => {
  return axios(`/api/web/templates/${id}`, 'POST', datas, {
    'Content-Type': 'application/x-www-form-urlencoded',
  });
};
/** 更新基础用例库对照表 */
const updateUseCaseContrast = async (id: number, datas: any) => {
  return axios(`/api/web/templates/${id}/contrast`, 'POST', datas, {
    'Content-Type': 'application/x-www-form-urlencoded',
  });
};
/** 获取指定基础用例库版本列表 */
const getUseCaseVersions = async (id: number, datas: object) => {
  return axios(`/api/web/templates/${id}`, 'GET', datas, {
    'Content-Type': 'application/x-www-form-urlencoded',
  });
};
/** 下载用例库对照表 */
const downloadUseCaseContrast = async (id: number) => {
  return axios(`/api/web/templates/${id}/template?type=contrast`, 'GET', null, {
    'Content-Type': 'application/x-www-form-urlencoded',
  });
};

/** --------------------------------------------------------基础用例库管理结束-------------------------------------------- */

/** --------------------------------------------------------测试表格模板管理开始-------------------------------------------- */
/** 获取测试表格模板列表 */
const getTestTableTemplates = async (datas: object) => {
  return axios('/api/web/tables', 'GET', datas);
};
/** 获取指定测试表格模板信息 */
const getTestTableTemplate = async (id: number) => {
  return axios(`/api/web/tables/${id}`, 'GET', null);
};
/** 获取表格名称 */
const getTableNames = async (datas: object) => {
  return axios('/api/web/table-names', 'GET', datas);
};
/** 创建表格名称 */
const createTableName = async (datas: object) => {
  return axios('/api/web/table-name', 'POST', datas);
};
/** 修改表格名称 */
const updateTableName = async (id: number, datas: object) => {
  return axios(`/api/web/table-name/${id}`, 'POST', datas);
};
/** 获取指定测试表格版本列表 */
const getTestTableVersions = async (id: number, datas: object) => {
  return axios(`/api/web/tables/${id}`, 'GET', datas);
};
/** 获取指定测试表格模板指定版本 */
const getTestTableVersion = async (id: number, versionId: number) => {
  return axios(`/api/web/tables/${id}/${versionId}`, 'GET', null, {
    'Content-Type': 'application/x-www-form-urlencoded',
  });
};
/** 创建测试表格模板 */
const createTestTableTemplate = async (datas: object) => {
  return axios('/api/web/table', 'POST', datas, {
    'Content-Type': 'application/x-www-form-urlencoded',
  });
};
/** 更新测试表格模板 */
const updateTestTableTemplate = async (
  id: number,
  versionId: number,
  datas: object
) => {
  return axios(`/api/web/tables/${id}/${versionId}`, 'POST', datas, {
    'Content-Type': 'application/x-www-form-urlencoded',
  });
};
/** 下载测试表格版本 */
const downloadTestTableVersion = async (id: number) => {
  return axios(`/api/web/tables/excel/${id}`, 'GET', null);
};
/** --------------------------------------------------------测试表格模板管理结束-------------------------------------------- */

/** --------------------------------------------------------实验室测试模块开始-------------------------------------------- */
/** ---------------------用例管理开始--------------- */
/** 获取实验室用例列表 */
const getLaboratoryUseCases = async (projectId: number, datas: object) => {
  return axios(`/api/web/indoor/projects/${projectId}/cases`, 'GET', datas);
};
/** 创建实验室用例 */
const createLaboratoryUseCase = async (projectId: number, datas: any) => {
  return axios(`/api/web/indoor/projects/${projectId}/case`, 'POST', datas, {
    'Content-Type': 'application/x-www-form-urlencoded',
  });
};
/** 更新实验室用例 */
const updateLaboratoryUseCase = async (
  projectId: number,
  id: number,
  datas: any
) => {
  return axios(
    `/api/web/indoor/projects/${projectId}/cases/${id}`,
    'POST',
    datas,
    {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  );
};
/** 更新实验室用例对照表 */
const updateLaboratoryUseCaseContrast = async (
  projectId: number,
  id: number,
  datas: any
) => {
  return axios(
    `/api/web/indoor/projects/${projectId}/cases/${id}/contrast`,
    'POST',
    datas,
    {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  );
};
/** 获取实验室用例版本列表 */
const getLaboratoryUseCaseVersions = async (
  projectId: number,
  id: number,
  datas: object
) => {
  return axios(
    `/api/web/indoor/projects/${projectId}/cases/${id}`,
    'GET',
    datas,
    {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  );
};
/** 下载指定实验室用例 */
const downloadLaboratoryUseCase = async (projectId: number, id: number) => {
  return axios(
    `/api/web/indoor/projects/${projectId}/cases/${id}/template`,
    'GET',
    null
  );
};
/** ---------------------用例管理结束--------------- */

/** ---------------------工程版本管理开始--------------- */
/** 获取实验室工程版本列表 */
const getLaboratoryProjectVersions = async (
  projectId: number,
  datas: object
) => {
  return axios(
    `/api/web/indoor/projects/${projectId}/engineering`,
    'GET',
    datas
  );
};
/** 创建实验室工程版本 */
const createLaboratoryProjectVersion = async (
  projectId: number,
  datas: object
) => {
  return axios(
    `/api/web/indoor/projects/${projectId}/engineering`,
    'POST',
    datas
  );
};
/** 更新实验室工程版本 */
const updateLaboratoryProjectVersion = async (
  projectId: number,
  id: number,
  datas: object
) => {
  return axios(
    `/api/web/indoor/projects/${projectId}/engineering/${id}`,
    'POST',
    datas
  );
};
/** 获取实验室工程版本总表 */
const getLaboratoryProjectVersionGeneralTable = async (
  projectId: number,
  id: number,
  datas?: object
) => {
  return axios(
    `/api/web/indoor/projects/${projectId}/engineering/${id}/statistics`,
    'GET',
    datas
  );
};
/** 获取工程版本具体项 */
const getLaboratoryProjectVersionItems = async (
  projectId: number,
  id: number,
  statisticId: number,
  datas: object
) => {
  return axios(
    `/api/web/indoor/projects/${projectId}/engineering/${id}/statistics/${statisticId}`,
    'GET',
    datas
  );
};
/** ---------------------工程版本管理结束--------------- */

/** ---------------------测试表格管理开始--------------- */
/** 获取实验室测试表格列表 */
const getLaboratoryTestTables = async (projectId: number, datas: object) => {
  return axios(`/api/web/indoor/projects/${projectId}/plans`, 'GET', datas);
};
/** 创建实验测试表格 */
const createLaboratoryTestTable = async (projectId: number, datas: object) => {
  return axios(`/api/web/indoor/projects/${projectId}/plan`, 'POST', datas, {
    'Content-Type': 'application/x-www-form-urlencoded',
  });
};
/** 更新实验室测试表格 */
const updateLaboratoryTestTable = async (
  projectId: number,
  id: number,
  datas: object
) => {
  return axios(
    `/api/web/indoor/projects/${projectId}/plans/${id}`,
    'POST',
    datas,
    {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  );
};
/** 获取实验室测试表格子级列表 */
const getLaboratoryChildTestTables = async (
  projectId: number,
  id: number,
  datas: object
) => {
  return axios(
    `/api/web/indoor/projects/${projectId}/plans/${id}`,
    'GET',
    datas,
    {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  );
};
/** 获取实验室指定测试测试计划的表格列表 */
const getLaboratoryChildTestTableItems = async (
  projectId: number,
  id: number,
  tableId: number
) => {
  return axios(
    `/api/web/indoor/projects/${projectId}/plans/${id}/tables/${tableId}`,
    'GET',
    null,
    {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  );
};
/** 获取实验室指定测试测试计划的表格列表中指定测试结果详情 */
const getLaboratoryChildTestTableItem = async (id: number) => {
  return axios(`/api/web/indoor/points/${id}`, 'GET', null, {
    'Content-Type': 'application/json',
  });
};
/** 更新实验室指定测试计划指定表格 */
const updateLaboratoryChildTestTableItem = async (
  projectId: number,
  id: number,
  tableId: number,
  datas: object
) => {
  return axios(
    `/api/web/indoor/projects/${projectId}/plans/${id}/tables/${tableId}`,
    'POST',
    datas,
    {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  );
};
/** 实验室测试表格测试项测试 */
const testLaboratoryTestTableItem = async (id: number, datas: object) => {
  return axios(`/api/web/indoor/points/${id}`, 'POST', datas);
};

/** 实验室测试批量通过 */
const testLaboratoryTestBatchPass = async (datas: object) => {
  return axios(`/api/web/indoor/points`, 'POST', datas);
};

/** 下载实验室测试表格 */
const downloadLaboratoryTestTable = async (projectId: number, id: number) => {
  return axios(
    `/api/web/indoor/projects/${projectId}/plans/${id}/excel`,
    'GET',
    null,
    {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  );
};

/** 获取实验室表格用例详情 */
const getLaboratoryTestTableCaseUse = async (
  projectId: number,
  id: number,
  caseId: number
) => {
  return axios(
    `/api/web/indoor/projects/${projectId}/plans/${id}/cases/${caseId}`,
    'GET',
    null
  );
};
/** 获取实验室用例名称 */
const getLaboratoryUseCaseNames = async (projectId: number) => {
  return axios(`/api/web/indoor/projects/${projectId}/case-names`, 'GET', null);
};
/** 复制实验室表格 */
const copyLaboratoryTable = async (id: number, datas: object) => {
  return axios(`/api/web/indoor/plans/${id}`, 'POST', datas, {
    'Content-Type': 'application/x-www-form-urlencoded',
  });
};
/** 修改附件类测试表格测试点 */
const updateAnnexTablePoint = async (pointId: number, datas: object) => {
  return axios(`/api/web/indoor/special-points/${pointId}`, 'POST', datas);
};
/** ---------------------测试表格管理结束--------------- */

/** --------------------------------------------------------实验室测试模块结束-------------------------------------------- */

/** --------------------------------------------------------现场测试模块开始-------------------------------------------- */
/** 获取现场用例列表 */
const getSpotUseCases = async (projectId: number, datas: object) => {
  return axios(`/api/web/outdoor/projects/${projectId}/cases`, 'GET', datas);
};
/** 获取指定现场用例的列表项 */
const getSpotUseCaseItems = async (
  projectId: number,
  id: number,
  datas: object
) => {
  return axios(
    `/api/web/outdoor/projects/${projectId}/cases/${id}`,
    'GET',
    datas
  );
};
/** 创建现场用例 */
const createSpotUseCase = async (projectId: number, datas: object) => {
  return axios(`/api/web/outdoor/projects/${projectId}/case`, 'POST', datas, {
    'Content-Type': 'application/x-www-form-urlencoded',
  });
};

/** 更新现场用例 */
const updateSpotUseCase = async (projectId: number, id: number, datas: any) => {
  return axios(
    `/api/web/outdoor/projects/${projectId}/cases/${id}`,
    'POST',
    datas,
    {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  );
};

/** 创建现场工程版本 */
const createSpotProjectVersion = async (projectId: number, datas: object) => {
  return axios(
    `/api/web/outdoor/projects/${projectId}/engineering`,
    'POST',
    datas
  );
};

/** 更新现场工程版本 */
const updateSpotProjectVersion = async (
  projectId: number,
  id: number,
  datas: object
) => {
  return axios(
    `/api/web/outdoor/projects/${projectId}/engineering/${id}`,
    'POST',
    datas
  );
};

/** 获取现场工程版本列表 */
const getSpotProjectVersions = async (projectId: number, datas: object) => {
  return axios(
    `/api/web/outdoor/projects/${projectId}/engineering`,
    'GET',
    datas
  );
};

/** 获取工程版本具体项 */
const getSpotProjectVersionItems = async (
  projectId: number,
  id: number,
  statisticId: number,
  datas: object
) => {
  return axios(
    `/api/web/outdoor/projects/${projectId}/engineering/${id}/statistics/${statisticId}`,
    'GET',
    datas
  );
};
/** 获取现场工程版本总表 */
const getSpotProjectVersionGeneralTable = async (
  projectId: number,
  id: number,
  datas?: object
) => {
  return axios(
    `/api/web/outdoor/projects/${projectId}/engineering/${id}/statistics`,
    'GET',
    datas
  );
};

/** 下载指定现场用例 */
const downloadSpotUseCase = async (projectId: number, id: number) => {
  return axios(
    `/api/web/indoor/projects/${projectId}/cases/${id}/template`,
    'GET',
    null
  );
};

/** 创建现场表格 */
const createSpotTestTable = async (projectId: number, datas: object) => {
  return axios(`/api/web/outdoor/projects/${projectId}/plan`, 'POST', datas, {
    'Content-Type': 'application/x-www-form-urlencoded',
  });
};
/** 获取现场用例名称 */
const getSpotUseCaseNames = async (projectId: number) => {
  return axios(
    `/api/web/outdoor/projects/${projectId}/case-names`,
    'GET',
    null
  );
};

/** 获取现场例版本列表 */
const getSpotUseCaseVersions = async (
  projectId: number,
  id: number,
  datas: object
) => {
  return axios(
    `/api/web/indoor/projects/${projectId}/cases/${id}`,
    'GET',
    datas,
    {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  );
};

/** 获取现场表格列表 */
const getSpotTestTables = async (projectId: number, datas: object) => {
  return axios(`/api/web/outdoor/projects/${projectId}/plans`, 'GET', datas);
};
/** 更新现场测试表格 */
const updateSpotTestTable = async (
  projectId: number,
  id: number,
  datas: object
) => {
  return axios(`/api/web/outdoor/plans/${id}`, 'POST', datas, {
    'Content-Type': 'application/x-www-form-urlencoded',
  });
};
/** 复制现场表格 */
const copySpotTable = async (id: number, datas: object) => {
  return axios(`/api/web/outdoor/plans/${id}`, 'POST', datas, {
    'Content-Type': 'application/x-www-form-urlencoded',
  });
};
/** 下载现场表格 */
const downloadSpotTestTable = async (id: number) => {
  return axios(`/api/web/outdoor/plans/${id}/excel`, 'GET', null, {
    'Content-Type': 'application/x-www-form-urlencoded',
  });
};

/** 获取现场测试表格子级列表 */
const getSpotChildTestTables = async (
  projectId: number,
  id: number,
  datas: object
) => {
  return axios(`/api/web/outdoor/plans/${id}`, 'GET', datas, {
    'Content-Type': 'application/x-www-form-urlencoded',
  });
};

/** 获取现场表格用例详情 */
const getSpotTableCaseUse = async (
  projectId: number,
  id: number,
  caseId: number
) => {
  return axios(`/api/web/outdoor/plans/${id}/cases/${caseId}`, 'GET', null);
};
/** 获取实验室指定测试测试计划的表格列表 */
const getSpotChildTestTableItems = async (
  projectId: number,
  id: number,
  tableId: number
) => {
  return axios(`/api/web/outdoor/plans/${id}/tables/${tableId}`, 'GET', null, {
    'Content-Type': 'application/x-www-form-urlencoded',
  });
};

/** 现场测试表格测试项测试 */
const testSpotTestTableItem = async (id: number, datas: object) => {
  return axios(`/api/web/outdoor/points/${id}`, 'POST', datas);
};

/** 获取实验室表格用例详情 */
const getSpotTestTableCaseUse = async (
  projectId: number,
  id: number,
  caseId: number
) => {
  return axios(`/api/web/outdoor/plans/${id}/cases/${caseId}`, 'GET', null);
};

/** 获取现场测试指定测试测试计划的表格列表中指定测试结果详情 */
const getSpotChildTestTableItem = async (id: number) => {
  return axios(`/api/web/outdoor/points/${id}`, 'GET', null, {
    'Content-Type': 'application/json',
  });
};

/** 更新现场指定测试计划指定表格 */
const updateSpotChildTestTableItem = async (
  projectId: number,
  id: number,
  tableId: number,
  datas: object
) => {
  return axios(
    `/api/web/outdoor/plans/${id}/tables/${tableId}`,
    'POST',
    datas,
    {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  );
};
/** 新增测试序列 */
const createSpotSequence = async (id: number, data: any) => {
  return axios(`/api/web/projects/${id}/sequence`, 'POST', data);
};
/** 更新测试序列 */
const updateSpotSequence = async (id: number, data: any) => {
  return axios(`/api/web/sequences/${id}`, 'POST', data);
};

/** 获取当前序列可选用例合集 */
const getCases = async (id: number, type: string) => {
  return axios(`/api/web/sequences/${id}/cases?type=${type}`, 'GET');
};
/** 获取新增序列第一步已经上传数据 */
const firstStepData = async (id: number) => {
  return axios(`/api/web/sequences/${id}`, 'GET');
};

/** 获取测试序列列表 */
const getSequences = async (id: number, data: any) => {
  return axios(`/api/web/projects/${id}/sequences`, 'GET', data);
};
/** 创建测试序列模板 */
const createSequenceTemplate = async (id: number, data: any) => {
  return axios(`/api/web/sequences/names/${id}/edition`, 'POST', data, {
    'Content-Type': 'application/x-www-form-urlencoded',
  });
};

/** 更新序列模板*/
const updateSequenceTemplate = async (id: number, data: any) => {
  return axios(`/api/web/sequences/editions/${id}`, 'POST', data, {
    'Content-Type': 'application/x-www-form-urlencoded',
  });
};

/** 创建测试序列模板名称 */
const createSequenceTemplateName = async (data: any) => {
  return axios('/api/web/sequences/name', 'POST', data);
};
/** 更新测试序列模板名称 */
const updateSequenceTemplateName = async (id: number, data: any) => {
  return axios(`/api/web/sequences/names/${id}`, 'POST', data);
};
/** 获取测试序列模板名称列表 */
const getSequenceTemplateNames = async (data: any) => {
  return axios('/api/web/sequences/names', 'GET', data);
};

/** 查看测试序列模板详情 */
const getTemplateDetail = (id: any) => {
  return axios(
    `/api/web/sequences/templates/${id}`,
    'GET',
    {},
    {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  );
};

/** 更新测试序列模板 */

const updataSequenceTemplate = async (id: number, data: any) => {
  return axios(`/api/web/sequences/templates/${id}`, 'POST', data, {
    'Content-Type': 'application/x-www-form-urlencoded',
  });
};
/** 获取测试序列模板列表 */
const getSequenceTemplate = async (data: any) => {
  return axios('/api/web/sequences/names', 'GET', data);
};
/** 制作序列选择用列获取模板*/
const getTemplates = async () => {
  return axios('/api/web/case/sequences/templates', 'GET');
};

/** 获取测试序列模板版本详情 */
const getSequenceTemplateVersionDetail = async (id: number, data: any) => {
  return axios(`/api/web/sequences/editions/${id}/templates`, 'GET', data);
};
/** 根据模板获取用列 */
const getTemplatesCases = async (id: number) => {
  return axios(`/api/web/case/sequences/templates/${id}`, 'GET');
};

/** 获取测试序列模板名称详情列表 */
const getTemplateNamesDetail = async (id: number, data: any) => {
  return axios(`/api/web/sequences/names/${id}`, 'GET', data);
};

/** 获取测试序列模板详情 */
const getTemplatesDetails = async (id: number) => {
  return axios(
    `/api/web/sequences/templates/${id}`,
    'GET',
    {},
    {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  );
};

/** 获取指定用例内容 */
const getCaseContents = (id: number) => {
  return axios(`/api/web/cases/${id}`, 'GET');
};

/** 保存选择的用例 */
const saveSelectedCases = async (id: number, data: any) => {
  return axios(`/api/web/sequences/${id}/cases`, 'POST', data);
};
/** 获取已选择的用例 */
const getSelectedCases = (id: number, data: any) => {
  return axios(`/api/web/sequences/${id}/cases`, 'GET', data);
};
/** 根据用例编号获取计划表格数据 */
const getTableData = (num: string, id: any) => {
  return axios(`/api/web/projects/${id}/plans?number=${num}`, 'GET');
};

// 筛选数据点s
const getPoints = (id: number, num: string) => {
  return axios(`/api/web/tables/${id}/points?number=${num}`, 'GET');
};

/** 保存选择的用例 */
const savePoints = async (sequenceId: number, data: any) => {
  return axios(`/api/web/sequences/${sequenceId}/cases`, 'POST', data);
};

/**操作*/
const sequenceOperate = async (id: number, data: any) => {
  return axios(`/api/web/sequences/${id}`, 'POST', data);
};
/**预览序列*/
const previewPoints = (id: number, data: any) => {
  return axios(`/api/web/sequences/${id}`, 'GET', data);
};

/** --------------------------------------------------------现场测试模块结束-------------------------------------------- */

/** --------------------------------------------------------缺陷管理模块开始-------------------------------------------- */
/** 获取缺陷列表 */
const getDefects = async (projectId: number, datas: object) => {
  return axios(`/api/web/project/${projectId}/defects`, 'GET', datas);
};
/** 获取综合联调缺陷列表 */
const getComprehensiveDefects = async (projectId: number, datas: object) => {
  return axios(
    `/api/web/project/${projectId}/comprehensives/defects`,
    'GET',
    datas
  );
};
/** 新增缺陷 */
const createDefect = async (projectId: number, datas: object) => {
  return axios(`/api/web/project/${projectId}/defect`, 'POST', datas);
};
/** 新增综合联调缺陷 */
const createComprehensiveDefect = async (projectId: number, datas: object) => {
  return axios(
    `/api/web/project/${projectId}/comprehensives/defect`,
    'POST',
    datas
  );
};
/** 更新缺陷 */
const updateDefect = async (projectId: number, id: number, datas: object) => {
  return axios(`/api/web/project/${projectId}/defects/${id}`, 'POST', datas);
};
/** 获取缺陷详情 */
const getDefect = async (projectId: number, id: number) => {
  return axios(`/api/web/project/${projectId}/defects/${id}`, 'GET', null);
};
/** 获取缺陷详情 */
const getComprehensiveDefect = async (id: number) => {
  return axios(`/api/web/comprehensives/defects/${id}`, 'GET', null);
};
/** 下载缺陷文件 */
const downloadDefect = async (projectId: number, datas: object) => {
  return axios(`/api/web/project/${projectId}/defects/excel`, 'GET', datas);
};
/** 获取指定测试点缺陷 */
const getPointDefect = async (projectId: number, pointId: number) => {
  return axios(
    `/api/web/project/${projectId}/points/${pointId}/defect`,
    'GET',
    { source: 'indoor' }
  );
};
/** 获取指定名称的缺陷模板 */
const getDefectTemplates = async (id: number, datas?: object) => {
  return axios(`/api/web/projects/${id}/defect/templates`, 'GET', datas);
};
/** --------------------------------------------------------缺陷管理模块结束-------------------------------------------- */
/** 获取日测试量统计列表 */
const getDayCounts = async (datas?: object) => {
  return axios('/api/web/day/statistics', 'GET', datas);
};
/** 项目缺陷统计列表 */
const getDefectCounts = async (datas?: object) => {
  return axios('/api/web/defect/statistics', 'GET', datas);
};

/** 项目测试结果 */
const getTestResultCount = async (datas?: object) => {
  return axios('/api/web/test/statistics', 'GET', datas);
};

/** 获取测试报告列表*/
const getTestReports = async (datas?: object) => {
  return axios('/api/web/reports', 'GET', datas);
};
/** 更新测试报告*/
const updateTestReport = async (id: number, datas?: object) => {
  return axios(`/api/web/reports/${id}`, 'POST', datas);
};
/** 生成测试报告*/
const generateReport = async (id: number, datas?: object) => {
  return axios(`/api/web/reports/${id}`, 'GET', datas);
};

// ——————————————————————----------------联调----------------------------------
const createComprehensive = async (
  projectId: any,
  datas: any,
  source: any = 'indoor'
) => {
  return axios(
    `/api/web/${source}/projects/${projectId}/comprehensive`,
    'POST',
    datas
  );
};
const updateComprehensive = async (
  id: any,
  datas: any,
  source: any = 'indoor'
) => {
  return axios(`/api/web/${source}/comprehensives/${id}`, 'POST', datas);
};
//获取用例模板
const getComprehensiveTemplate = async (
  projectid: any,
  datas?: any,
  source: any = 'indoor'
) => {
  return axios(
    `/api/web/${source}/projects/${projectid}/comprehensives/templates`,
    'GET',
    datas
  );
};
//获取列表
const getComprehensives = async (
  projectId: any,
  datas?: any,
  source: any = 'indoor'
) => {
  return axios(
    `/api/web/${source}/projects/${projectId}/comprehensives`,
    'GET',
    datas
  );
};
// 版本用例列表
const getComprehensiveCases = async (
  id: any,
  datas?: any,
  source: any = 'indoor'
) => {
  return axios(`/api/web/${source}/comprehensives/${id}/cases`, 'GET', datas);
};
// 所有场景
const getComprehensiveScenes = async (id: any, source: any = 'indoor') => {
  return axios(`/api/web/${source}/comprehensives/${id}/scenes`, 'GET');
};
// 所有测试详情
const getComprehensivesTests = async (
  id: any,
  datas: any,
  source: any = 'indoor'
) => {
  return axios(`/api/web/${source}/comprehensives/${id}`, 'GET', datas);
};

// 测试点测试
const createComprehensiveTest = (
  id: any,
  datas: any,
  source: any = 'indoor'
) => {
  return axios(`/api/web/${source}/comprehensives/points/${id}`, 'POST', datas);
};
// 测试点详情
const getComprehensiveTest = (id: any, source: any = 'indoor') => {
  return axios(`/api/web/${source}/comprehensives/points/${id}`, 'GET');
};
// 结束测试
const overTest = (id: any, source: any = 'indoor') => {
  return axios(`/api/web/${source}/comprehensives/${id}`, 'POST', {
    type: 'close',
  });
};
// 下发测试
const doingTest = (id: any, source: any = 'indoor') => {
  return axios(`/api/web/${source}/comprehensives/${id}`, 'POST', {
    type: 'issued',
  });
};

// // 用例测试详情
// const useCaseDetails = async (id: any) => {
//   return axios(`/api/web/indoor/comprehensives/${id}/scenes`, 'GET')
// }

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  login,
  refreshToken,
  getQiniuToken,
  getProjects,
  getAllProjects,
  getConfigurations,
  changePassword,
  getResetPasswordSmsCode,
  resetPassword,
  getTaskProcess,
  getPosts,
  getStandardPosts,
  createProjectUser,
  updateProjectUser,
  getAuthorities,
  getAuthoritie,
  updateAuthoritie,
  getUserAuthorities,
  getProjectUsers,
  setStartProjects,
  getSettingMessage,
  settingMessage,

  getUseCases,
  downloadUseCase,
  createUseCase,
  updateUseCase,
  updateUseCaseContrast,
  getUseCaseVersions,
  downloadUseCaseContrast,

  getTestTableTemplates,
  getTestTableTemplate,
  getTableNames,
  createTableName,
  updateTableName,
  getTestTableVersions,
  getTestTableVersion,
  createTestTableTemplate,
  updateTestTableTemplate,
  downloadTestTableVersion,

  getLaboratoryUseCases,
  createLaboratoryUseCase,
  updateLaboratoryUseCase,
  updateLaboratoryUseCaseContrast,
  getLaboratoryUseCaseVersions,
  downloadLaboratoryUseCase,
  getLaboratoryUseCaseNames,
  copyLaboratoryTable,
  updateAnnexTablePoint,

  getLaboratoryProjectVersions,
  createLaboratoryProjectVersion,
  updateLaboratoryProjectVersion,
  getLaboratoryProjectVersionGeneralTable,
  getLaboratoryProjectVersionItems,

  getLaboratoryTestTables,
  createLaboratoryTestTable,
  updateLaboratoryTestTable,
  getLaboratoryChildTestTables,
  getLaboratoryChildTestTableItems,
  getLaboratoryChildTestTableItem,
  updateLaboratoryChildTestTableItem,
  testLaboratoryTestTableItem,
  testLaboratoryTestBatchPass,
  downloadLaboratoryTestTable,
  getLaboratoryTestTableCaseUse,

  getSpotUseCases,
  getSpotUseCaseItems,
  createSpotUseCase,
  updateSpotUseCase,
  getSpotUseCaseNames,
  getSpotUseCaseVersions,
  downloadSpotUseCase,

  createSpotProjectVersion,
  updateSpotProjectVersion,
  getSpotProjectVersions,
  getSpotProjectVersionGeneralTable,
  getSpotProjectVersionItems,

  createSpotTestTable,
  getSpotTestTables,
  updateSpotTestTable,
  copySpotTable,
  downloadSpotTestTable,
  getSpotChildTestTables,
  getSpotTableCaseUse,
  getSpotChildTestTableItems,
  testSpotTestTableItem,
  getSpotTestTableCaseUse,
  getSpotChildTestTableItem,
  updateSpotChildTestTableItem,

  // 现场测试序列
  createSpotSequence,
  updateSpotSequence,
  getCases,
  firstStepData,
  getSequences,
  createSequenceTemplate,
  updateSequenceTemplate,
  createSequenceTemplateName,
  updateSequenceTemplateName,
  getSequenceTemplateNames,
  getSequenceTemplateVersionDetail,
  getTemplatesCases,
  getTemplates,
  getTemplateNamesDetail,
  getTemplateDetail,
  updataSequenceTemplate,
  getTemplatesDetails,
  getSequenceTemplate,
  getCaseContents,
  saveSelectedCases,
  getSelectedCases,
  getTableData,
  getPoints,
  savePoints,
  sequenceOperate,
  previewPoints,

  getDefects,
  getComprehensiveDefects,
  createDefect,
  updateDefect,
  getDefect,
  getComprehensiveDefect,
  downloadDefect,
  getPointDefect,
  getDefectTemplates,

  getDayCounts,
  getDefectCounts,
  getTestResultCount,
  getTestReports,
  updateTestReport,
  generateReport,

  createComprehensive,
  updateComprehensive,
  getComprehensiveTemplate,
  getComprehensives,
  getComprehensiveCases,
  getComprehensiveScenes,
  getComprehensivesTests,
  createComprehensiveDefect,
  createComprehensiveTest,
  getComprehensiveTest,
  overTest,
  doingTest,
};
