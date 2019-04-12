# Form Generator

You give this component array of object as props <Form data={data} /> each object has label and type of the label. The componenet generate a ```Form``` from this array of object.

###  Object content : 

| Key | Value | description |
| ------ | ------ |  ------ |
| id | string ```unique``` | required in all object ```id != null```
| label | string  | required in all object ```label != null```
| type | enum : [int,   decimale,  varchar, text, date, dateTime, time, set, select-multi, select,enum] |
| size | array : [int,int] | required in int and decimale type |
| rows | array : [int,int] | required in text type first argument is number of rows second argument is maximum number of rows |
| inputSize |enum : [ sm , md , lg , xl ] | required in all object ```inputSize != null``` |


Date type franch


change size to length