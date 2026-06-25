/*
 * Business Rule: Validate Case Mandatory Fields
 * Table: sn_customerservice_case or custom Case table
 * When: before insert / before update
 * Purpose: 必填字段校验，未输入时阻止保存。
 */
(function executeRule(current, previous) {
    var missingFields = [];

    if (gs.nil(current.getValue('u_customer_name'))) {
        missingFields.push('顾客名');
    }

    if (gs.nil(current.getValue('u_project_name'))) {
        missingFields.push('项目名');
    }

    if (gs.nil(current.getValue('assigned_to'))) {
        missingFields.push('Assigned to');
    }

    if (missingFields.length > 0) {
        gs.addErrorMessage(missingFields.join('、') + 'を入力してください。');
        current.setAbortAction(true);
    }
})(current, previous);
