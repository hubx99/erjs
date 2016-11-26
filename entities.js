var entity = {
	"MST_DEPARTMENT": [ "ID", "DESC" ],
	"MST_EMPLOYEE"  : [ "ID", "NAME", "DEPARTMENT_ID" ],
	"ENTRY"         : [ "EMP_ID", "TIME" ]
};

var relations = [
	["MST_EMPLOYEE.DEPARTMENT_ID", "MST_DEPARTMENT.ID"],
	["ENTRY.EMP_ID", "MST_EMPLOYEE.ID"]
];
