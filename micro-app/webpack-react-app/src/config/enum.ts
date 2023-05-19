/*
 * @Description: 枚举值配置
 * @Author: yong.li
 * @Date: 2022-01-21 16:03:03
 * @LastEditors: yong.li
 * @LastEditTime: 2022-04-27 14:11:45
 */

const enumConfig = {
  /** 数据来源 */
  useCaseSources: [
    { value: 'indoor', label: '室内' },
    { value: 'outdoor', label: '现场' }
  ],
  /** 用例状态 */
  useCaseStates: [
    { value: 'natural', label: '正常' },
    { value: 'abandoned', label: '废弃' },
    { value: 'other', label: '其他' }
  ],
  /** 用例更新类型 */
  useCaseUpdateTypes: [
    { value: 'create', label: '新增' },
    { value: 'update', label: '变更' },
    { value: 'delete', label: '删除' }
  ],
  /** 用例属性 */
  useCaseAttributes: [
    { value: 'func', label: '功能项' },
    { value: 'data', label: '数据项' }
  ],
  /** 用例测试结果 */
  useCaseTestResults: [
    { value: 'pass', label: '通过' },
    { value: 'reject', label: '不通过' },
    { value: 'invalid', label: '不涉及' },
    { value: 'block', label: '阻塞' },
    { value: 'other', label: '其他' }
  ],
  /** 测试表格状态 */
  testTableStates: [
    { value: 'natural', label: '正常' },
    { value: 'abandoned', label: '废弃' },
    // { value: 'doing', label: '已下发' },
    { value: 'over', label: '其他' }
  ],
  /** 测试表格异常操作类型 */
  testTableAbnormalTypes: [
    { value: 'pass', label: '通过' },
    { value: 'reject', label: '不通过' },
    { value: 'invalid', label: '不涉及' },
    { value: 'block', label: '阻塞' },
    { value: 'other', label: '其他' }
  ],
  /** 测试表格类型 */
  testTableTypes: [
    { value: 'point', label: '单数据点' },
    { value: 'transverse', label: '复合数据点(横向)' },
    { value: 'portrait', label: '复合数据点(纵向）' },
    { value: 'file', label: '特殊附件' }
  ],
  /** 项目状态 */
  projectStates: [
    { value: 'archived', label: '已归档' },
    { value: 'active', label: '正常' },
    { value: 'other', label: '其他' }
  ],
  /** 项目分类 */
  projectTypes: [
    { value: 'active', label: '正常' },
    { value: 'service', label: '维保' },
    { value: 'otherService', label: '部分维保' },
    { value: 'archived', label: '已归档' },
    { value: 'other', label: '其他' }
    // { value: 'engineering', label: '工程类' },
    // { value: 'bid', label: '投标类' },
    // { value: 'develop', label: '研发类' },
    // { value: 'product', label: '产品类' },
    // { value: 'service', label: '维保类' }
  ],
  /** 缺陷状态 */
  defectStates: [
    { value: 'open', label: '打开' },
    { value: 'close', label: '关闭' },
    { value: 'bequeath', label: '已放弃' }
  ],
  /** 缺陷等级 */
  defectLevels: [
    { value: '低', label: '低' },
    { value: '中', label: '中' },
    { value: '高', label: '高' },
    { value: '非常高', label: '非常高' },
    { value: '安全类问题', label: '安全类问题' }
  ],
  /** 测试序列模板 */
  sequenceTemplateState: [
    { value: 'natural', label: '正常' },
    { value: 'abandoned', label: '废弃' },
    { value: 'other', label: '其他' }
  ],
  /** 测试序列模板 */
  sequenceTemplateType: [
    { value: '500', label: '500' },
    { value: '510', label: '510' }
  ],
  /** 测试序列状态 */
  sequenceState: [
    { value: 'making', label: '制作中' },
    { value: 'to_made', label: '待制作' },
    { value: 'to_issued', label: '待下发' },
    { value: 'to_do', label: '待执行' },
    { value: 'doing', label: '执行中' },
    { value: 'over', label: '已完成' },
    { value: 'abandoned', label: '废弃' }
  ],
  /** 测试序列类型 */
  sequenceType: [
    { value: 'normal', label: '正常' }
    // { value: 'special', label: '特殊' }
  ],
  /** 实验室综合联调用例状态 */
  comprehensiveUseCaseStates: [
    { value: 'natural', label: '正常' },
    { value: 'abandoned', label: '废弃' },
    { value: 'over', label: '已完成' },
    { value: 'other', label: '其他' }
  ],
  /** 现场综合联调用例状态 */
  spotComprehensiveUseCaseStates: [
    { value: 'natural', label: '正常' },
    { value: 'doing', label: '已下发' },
    { value: 'abandoned', label: '废弃' },
    { value: 'over', label: '已完成' },
    { value: 'other', label: '其他' }
  ]
}

export default enumConfig
