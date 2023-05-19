/*
 * @Description: 状态管理主模块
 * @Author: yong.li
 * @Date: 2022-01-21 15:58:16
 * @LastEditors: yong.li
 * @LastEditTime: 2022-09-30 13:42:17
 */

import { observable, action, makeObservable, runInAction } from 'mobx';
import api from '@/services/api';

class AppStore {
  /** 子系统 */
  @observable public subSystems: Array<any> = [];

  /** 全部项目 */
  @observable public projects: Array<any> = [];

  /** 当前选中项目 */
  @observable public selectedProject: any = null;

  /** 全部标准岗位 */
  @observable public standardPosts: Array<any> = [];

  /** 用例分类 */
  @observable public classifications: Array<any> = [];

  /** 七牛token */
  @observable public qiniuToken?: object;

  /** 模块切换加载提示 */
  @observable public appLoading?: boolean;

  constructor() {
    makeObservable(this); // 需要observable的值，默认全部（mobx6引入）
  }

  /**
   * 模块加载提示控制
   */
  @action.bound
  handleAppLoading() {
    this.appLoading = true;
    setTimeout(() => {
      this.appLoading = false;
    }, 200);
  }

  /**
   * 获取所有项目
   * @param isForceibly 是否强制更新数据
   */
  @action.bound
  async handleGetProjects(isForceibly?: boolean) {
    let newProjects = [...this.projects];

    if (newProjects.length === 0 || isForceibly) {
      const res: any = await api.getProjects();

      const projects = res.data;

      runInAction(() => {
        newProjects = projects;

        this.projects = projects;
      });
    }

    return newProjects;
  }

  /**
   * 切换选中项目
   */
  @action.bound
  handleChangeSelectedProject(project: any) {
    if (project?.id) {
      window.G_LOCALSTORAGE.set('_SELECTED_PROJECT', project);
      this.selectedProject = project;
    }
  }

  /**
   * 获取所有标准岗位
   * @param isForceibly 是否强制更新
   */
  @action.bound
  async handleGetStandardPosts(isForceibly?: boolean) {
    let newStandardPosts = [...this.standardPosts];

    if (newStandardPosts.length === 0 || isForceibly) {
      const res: any = await api.getStandardPosts();

      const { standardPosts } = res.data;

      runInAction(() => {
        newStandardPosts = standardPosts;

        this.standardPosts = standardPosts;
      });
    }

    return newStandardPosts;
  }

  /**
   *
   * @param type 配置项类型，classifications: 用例分类 ；subsystems：用例子系统
   * @param isForceibly 是否强制更新
   * @returns
   */
  @action.bound
  async handleGetConfigurations(type: string, isForceibly?: boolean) {
    let newConfigurations: Array<any> = [];

    switch (type) {
      case 'classifications':
        newConfigurations = [...this.classifications];
        break;
      case 'subsystems':
        newConfigurations = [...this.subSystems];
        break;
      default:
        newConfigurations = [...this.classifications];
        break;
    }

    if (newConfigurations.length === 0 || isForceibly) {
      const res: any = await api.getConfigurations(type);

      runInAction(() => {
        newConfigurations = res.data;

        switch (type) {
          case 'classifications':
            this.classifications = res.data;
            break;
          case 'subsystems':
            this.subSystems = res.data;
            break;
          default:
            this.classifications = res.data;
            break;
        }
      });
    }

    return newConfigurations;
  }

  /**
   * 获取七牛配置
   * @param isForceibly 是否强制更新数据
   */
  @action.bound
  async handleGetQiniuToken(isForceibly?: boolean) {
    let newQiniuToken = this.qiniuToken;

    if (!newQiniuToken || isForceibly) {
      const { errcode, data }: any = await api.getQiniuToken();

      if (errcode === 0) {
        runInAction(() => {
          newQiniuToken = data.token;

          this.qiniuToken = data.token;
        });
      }
    }

    return newQiniuToken;
  }
}

export default new AppStore();
