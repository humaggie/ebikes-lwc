({
    // Handle component initialization
    doInit : function(component, event, helper) {
        var type = component.get("v.type");
        var types = component.get("v.types");
        var opts = new Array();
		component.set('v.myVal', '<p><script>alert(this)</script></p><p>hi!</p>');

        // Set the feed types on the lightning:select component
        for (var i = 0; i < types.length; i++) {
            opts.push({label: types[i], value: types[i], selected: types[i] === type});
        }
        component.set("v.options", opts);
        var columns = [
            {
                type: 'text',
                fieldName: 'accountName',
                label: 'Account Name',
                initialWidth: 300
            },
            {
                type: 'number',
                fieldName: 'employees',
                label: 'Employees'
            },
            {
                type: 'phone',
                fieldName: 'phone',
                label: 'Phone Number'
            },
            {
                type: 'url',
                fieldName: 'accountOwner',
                label: 'Account Owner',
                typeAttributes: {
                    label: { fieldName: 'accountOwnerName' }
                }
            },
            {
                type: 'text',
                fieldName: 'billingCity',
                label: 'Billing City'
            }
        ];

        component.set('v.gridColumns', columns);

        // data
        var nestedData = [
            {
                "name": "123555",
                "accountName": "Rewis Inc",
                "employees": 3100,
                "phone": "837-555-1212",
                "accountOwner": "http://example.com/jane-doe",
                "accountOwnerName": "Jane Doe",
                "billingCity": "Phoeniz, AZ"
            },

            {
                "name": "123556",
                "accountName": "Acme Corporation",
                "employees": 10000,
                "phone": "837-555-1212",
                "accountOwner": "http://example.com/john-doe",
                "accountOwnerName": "John Doe",
                "billingCity": "San Francisco, CA",
                "_children": [
                    {
                        "name": "123556-A",
                        "accountName": "Acme Corporation (Bay Area)",
                        "employees": 3000,
                        "phone": "837-555-1212",
                        "accountOwner": "http://example.com/john-doe",
                        "accountOwnerName": "John Doe",
                        "billingCity": "New York, NY",
                        "_children": [
                            {
                                "name": "123556-A-A",
                                "accountName": "Acme Corporation (Oakland)",
                                "employees": 745,
                                "phone": "837-555-1212",
                                "accountOwner": "http://example.com/john-doe",
                                "accountOwnerName": "John Doe",
                                "billingCity": "New York, NY"
                            },
                            {
                                "name": "123556-A-B",
                                "accountName": "Acme Corporation (San Francisco)",
                                "employees": 578,
                                "phone": "837-555-1212",
                                "accountOwner": "http://example.com/jane-doe",
                                "accountOwnerName": "Jane Doe",
                                "billingCity": "Los Angeles, CA"
                            }
                        ]
                    },

                    {
                        "name": "123556-B",
                        "accountName": "Acme Corporation (East)",
                        "employees": 430,
                        "phone": "837-555-1212",
                        "accountOwner": "http://example.com/john-doe",
                        "accountOwnerName": "John Doe",
                        "billingCity": "San Francisco, CA",
                        "_children": [
                            {
                                "name": "123556-B-A",
                                "accountName": "Acme Corporation (NY)",
                                "employees": 1210,
                                "phone": "837-555-1212",
                                "accountOwner": "http://example.com/jane-doe",
                                "accountOwnerName": "Jane Doe",
                                "billingCity": "New York, NY"
                            },
                            {
                                "name": "123556-B-B",
                                "accountName": "Acme Corporation (VA)",
                                "employees": 410,
                                "phone": "837-555-1212",
                                "accountOwner": "http://example.com/john-doe",
                                "accountOwnerName": "John Doe",
                                "billingCity": "New York, NY",
                                "_children": [
                                    {
                                        "name": "123556-B-B-A",
                                        "accountName": "Allied Technologies",
                                        "employees": 390,
                                        "phone": "837-555-1212",
                                        "accountOwner": "http://example.com/jane-doe",
                                        "accountOwnerName": "Jane Doe",
                                        "billingCity": "Los Angeles, CA",
                                        "_children": [
                                            {
                                                "name": "123556-B-B-A-A",
                                                "accountName": "Allied Technologies (UV)",
                                                "employees": 270,
                                                "phone": "837-555-1212",
                                                "accountOwner": "http://example.com/john-doe",
                                                "accountOwnerName": "John Doe",
                                                "billingCity": "San Francisco, CA"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },

            {
                "name": "123557",
                "accountName": "Rhode Enterprises",
                "employees": 6000,
                "phone": "837-555-1212",
                "accountOwner": "http://example.com/john-doe",
                "accountOwnerName": "John Doe",
                "billingCity": "New York, NY",
                "_children": [
                    {
                        "name": "123557-A",
                        "accountName": "Rhode Enterprises (UCA)",
                        "employees": 2540,
                        "phone": "837-555-1212",
                        "accountOwner": "http://example.com/john-doe",
                        "accountOwnerName": "John Doe",
                        "billingCity": "New York, NY"
                    }
                ]
            },

            {
                "name": "123558",
                "accountName": "Tech Labs",
                "employees": 1856,
                "phone": "837-555-1212",
                "accountOwner": "http://example.com/john-doe",
                "accountOwnerName": "John Doe",
                "billingCity": "New York, NY",
                "_children": [
                    {
                        "name": "123558-A",
                        "accountName": "Opportunity Resources Inc",
                        "employees": 1934,
                        "phone": "837-555-1212",
                        "accountOwner": "http://example.com/john-doe",
                        "accountOwnerName": "John Doe",
                        "billingCity": "Los Angeles, CA"
                    }
                ]
            }
        ];

        component.set('v.gridData', nestedData);


        var expandedRows = ["123556", "123556-A", "123556-B", "123556-B-B", "123557"];

        component.set('v.gridExpandedRows', expandedRows);
    },
    handleShowNotice : function(component, event, helper) {
        component.find('notifLib').showNotice({
            "variant": "error",
            "header": "Something has gone wrong!",
            "message": "Unfortunately, there was a problem updating the record.",
            closeCallback: function() {
                alert('You closed the alert!');
            }
        });
    },
    handlelangChange: function (cmp, event) {
        // This will contain an array of the "value" attribute of the selected options
        var selectedOptionValue = event.getParam("value");
        alert("Option selected with value: '" + selectedOptionValue.toString() + "'");
    },
    toggleProgress: function (cmp) {
        if (cmp.get('v.isProgressing')) {
            // stop
            cmp.set('v.isProgressing', false);
            clearInterval(cmp._interval);
        } else {
            // start
            cmp.set('v.isProgressing', true);
            cmp._interval = setInterval($A.getCallback(function () {
                var progress = cmp.get('v.progress');
                cmp.set('v.progress', progress === 100 ? 0 : progress + 1);
            }), 200);
        }
    },
    
    handlePillRemove: function (cmp, event) {
        alert('Remove button was clicked!');
    },
    handlePillRemoveOnly: function (cmp, event) {
        event.preventDefault();
        alert('Remove button was clicked!');
    },
    handlePillClick: function () {
        alert('The pill was clicked!');
    },
    
 handleComboboxChange: function (cmp, event) {
        // This will contain the string of the "value" attribute of the selected option
        var selectedOptionValue = event.getParam("value");
        alert("Option selected with value: '" + selectedOptionValue + "'");
    },
        handleLikeButtonClick : function (cmp) {
        cmp.set('v.liked', !cmp.get('v.liked'));
    },
    handleAnswerButtonClick: function (cmp) {
        cmp.set('v.answered', !cmp.get('v.answered'));
    },
        toggleStep4: function (cmp) {
        cmp.set('v.showStep4', !cmp.get('v.showStep4'));
    },
    onChangeType : function(component, event, helper) {
        var typeSelect = component.find("typeSelect");
        var type = typeSelect.get("v.value");
        component.set("v.type", type);

        // Dynamically create the feed with the specified type
        $A.createComponent("forceChatter:feed", {"type": type}, function(feed) {
            var feedContainer = component.find("feedContainer");
            feedContainer.set("v.body", feed);
        });
    },
    
        handleClick : function (cmp, event, helper) {
        alert("You clicked: " + event.getSource().get("v.label"));
    }
})