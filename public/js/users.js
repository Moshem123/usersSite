$(document).ready(function () {
    //get the tradair org id for all clients
    // qa20
    //var tradairOrgId=[{id: "a4cac5e8-54f8-11e7-8872-0645f8b4707f",text: "qa-20.tradair.com"}];
    // all-uat
    const orgEnvironments = {
        'qa': {
            data: [
                {id: "4886144f-77af-11e2-a9c9-06a92dde9673", text: "leumi-uat-ng.tradair.com"},
                {id: "4886144f-77af-11e2-a9c9-06a92dde9673", text: "banregio-demo.tradair.com"},
                {id: "fc8c4cb5-412a-11e7-9fc6-120bf7a75c96", text: "banregio-uat.tradair.com"},
                {id: "9bebb9e9-54d1-11e7-a1b0-0600936cad3d", text: "10.2.1.9"},
                {id: "64e12c3a-558f-11e7-b045-06ad0fe21acd", text: "local-danielm.tradair.com"},
                {id: "81835e57-6707-11e7-bf65-021cad39bb41", text: "intqa3.tradair.com"},
                {id: "fbd4cb41-6bc3-11e7-ad0b-0600936cad3d", text: "tst-09.tradair.com"},
                {id: "839b204a-7072-11e7-8b14-023f5fac116f", text: "qa201.tradair.com"},
                {id: "20fbc22d-72a3-11e7-a1f9-0635d542092a", text: "qa100.tradair.com"},
                {id: "a4cac5e8-54f8-11e7-8872-0645f8b4707f", text: "qa-20.tradair.com"},
                {id: "72fd5c16-4ee3-11e5-87dc-02c7032ce083", text: "tst-08.tradair.com"},
                {id: "5cc83824-8276-11e7-a1f9-0635d542092a", text: "qa203.tradair.com"},
                {id: "8d8ec92f-8574-11e7-a1f9-0635d542092a", text: "qa-30.tradair.com"},
                {id: "69986eae-86fd-11e7-a1f9-0635d542092a", text: "quality.tradair.com"},
                {id: "f152ad9a-0453-11e5-8f2f-023de5bb588f", text: "qa-10.tradair.com"},
                {id: "e1ddc956-8c07-11e7-a3db-06f413a47874", text: "intqa6.tradair.com"}
            ],
            url: '10.2.14.27'
        },
        'uat': {
            data: [
                {id: "b5a6c800-4152-11e7-9fc6-120bf7a75c96", text: "banregio-uat.tradair.com"},
                {id: "10a0054a-3164-11e6-a8bb-06bc743b611f", text: "divisa-uat.tradair.com"},
                {id: "8eb1892e-46c2-11e6-83e9-068ff50acf03", text: "gkfx2-uat.tradair.com"},
                {id: "4886144f-77af-11e2-a9c9-06a92dde9673", text: "leumi-uat-ng.tradair.com"},
                {id: "cf3f5ef9-5a8a-11e7-8598-02a0233ced2b", text: "uob-uat.tradair.com"},
                {id: "b2b54900-5657-11e7-b6f5-12b1812eee4a", text: "bgc-uat.tradair.com"},
                {id: "3976a529-67a6-11e7-906c-02737568e54b", text: "tnet-test.tradair.com"},
                {id: "42775824-708d-11e4-be4f-067be37c0126", text: "sucden-uat-ng.tradair.com"},
                {id: "42775824-708d-11e4-be4f-067be37c0126", text: "mbank-uat.tradair.com"},
                {id: "89792949-f48a-11e4-ad2d-0669a9c90eca", text: "tpsd-uat.tradair.com"},
                {id: "f07f234a-5a74-11e3-812b-02abf13df591", text: "kwt-uat.tradair.com"},
                {id: "0ae19e42-5fe2-11e6-b691-1250e47f71fd", text: "icap-uat.tradair.com"},
                {id: "7179b06a-8276-11e7-9f30-005056a04200", text: "ny2-edge-tnet.tradair.com"},
                {id: "5605593f-7686-11e7-9356-005056a04200", text: "ny2-fcstone-tnet.tradair.com"},
                {id: "c08bd897-e1d4-11e4-b79c-06964b91c957", text: "idb-uat.tradair.com"},
                {id: "f152ad9a-0453-11e5-8f2f-023de5bb588f", text: "banorte-uat.tradair.com"},
                {id: "f139f8e4-ff84-11e4-8467-0280310e4df1", text: "saxo-uat.tradair.com"},
                {id: "4dc91006-33c3-11e6-bb0b-028b135bc723", text: "hirose-uat.tradair.com"},
                {id: "cba88e2b-76c0-11e7-8598-02a0233ced2b", text: "eis-uat.tradair.com"},
                {id: "5e753a23-4da6-11e6-86a1-065dc1d4b681", text: "yapi-uat.tradair.com"},
                {id: "2d4627a9-5210-11e4-a72c-02710b6f6675", text: "yapi-desk-uat.tradair.com"},
                {id: "f152ad9a-0453-11e5-8f2f-023de5bb588f", text: "edgew-us-uat.tradair.com"}
            ],
            url: '10.2.1.28'
        },
        'production': {
            data: [
                {id: "4886144f-77af-11e2-a9c9-06a92dde9673", text: "leumi.tradair.com"},
                {id: "3f1d534d-f909-11e6-b5f7-122d74620b50", text: "banregio.tradair.com"},
                {id: "8d747ba5-5592-11e7-8807-12d0f85b964a", text: "bgc.tradair.com"},
                {id: "7f939751-6208-11e6-a950-069c0b225545", text: "divisa.tradair.com"},
                {id: "13faa16e-5192-11e6-b3ea-061752bd2719", text: "uob.tradair.com"},
                {id: "09a4890a-3a08-11e7-8bdc-02f878f9766f", text: "atri3.tradair.com"},
                {id: "dc67067f-f745-11e5-b9b6-065249045809", text: "gkfx.tradair.com"},
                {id: "42775824-708d-11e4-be4f-067be37c0126", text: "sucden.tradair.com"},
                {id: "cf18e442-4836-11e6-9cee-0265cbaf0b4f", text: "hirose.tradair.com"},
                {id: "9a6c474f-622e-11e6-8387-128abbcced61", text: "icap.tradair.com"},
                {id: "8a6b6455-8038-11e7-ab26-125247e6b12c", text: "chappy.tradair.com"},
                {id: "42775824-708d-11e4-be4f-067be37c0126", text: "mbank.tradair.com"},
                {id: "f152ad9a-0453-11e5-8f2f-023de5bb588f", text: "bnrt.tradair.com"},
                {id: "41215990-c69c-11e5-95bb-025e0e0158fb", text: "saxo.tradair.com"},
                {id: "2ca4d5cd-76d1-11e7-a55b-063beea02467", text: "eis.tradair.com"},
                {id: "f152ad9a-0453-11e5-8f2f-023de5bb588f", text: "edgew.tradair.com"},
                {id: "42775824-708d-11e4-be4f-067be37c0126", text: "barak.tradair.com"}
            ],
            url: '10.6.0.251'
        }
    };

    //##########################################################################
    // ---Variables---
    let tradairOrgId = [];
    let env;
    let firstLoad = true;
    let successHosts = [];
    // let orgEnvironments = {
    //     'qa': {
    //         data: [],
    //         url: '10.2.14.27'
    //     },
    //     'uat': {
    //         data: [],
    //         url: '10.2.1.28'
    //     },
    //     'production': {
    //         data: [],
    //         url: '10.6.0.251'
    //     }
    // };
    const apiURL = '/proxy';
    const newKeys = {hostName: 'text', orgGuid: 'id'};
    let postData = {
        header: {
            ownerName: 'usersSite'
        },
        payload: {
            path: 'v2/host/getHostsTradairOrgIds',
            url: ''
        }
    };

    //##########################################################################
    // ---Functions---
    // Generate GUID
    function guid() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }

        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
    }

    // Rename keys for select2 (Add New User)
    function renameKeys(obj, newKeys) {
        const keyValues = Object.keys(obj).map(key => {
            const newKey = newKeys[key] || key;
            return {[newKey]: obj[key]};
        });
        return Object.assign({}, ...keyValues);
    }

    // Add functionality for clear button of console log!!! (register event)
    function initClr() {
        $("#clearBtn").on('click', function () {
            $("#consoleLog").html('');
        });
    }

    // Add hosts to select2 box (Add New User)
    function initSelect() {

        if (!firstLoad) {
            $('#inputHosts, #inputHostsUpdate').html('');
        }
        //remove .tradair.com from clients' name
        tradairOrgId = JSON.parse(JSON.stringify(tradairOrgId).replace(/.tradair.com/g, ""));
        $('#inputHosts, #inputHostsUpdate').select2({
            data: tradairOrgId
        });
        firstLoad = false;
    }

    //##########################################################################
    // ---Init buttons---
    initClr(); //(Add New User)

    $("#inputHosts, #inputHostsUpdate").select2(); // (Add New User)

    // Change value of environment
    $("input[name='optEnv']").change(function () {
        env = $(this).attr("data-env");
        tradairOrgId = orgEnvironments[env].data;
        initSelect();
    });

    //apply functionality to select all clients and clear buttons
    $('*[data-action="selectAll"]').on("click", function () {
        $("#inputHosts, #inputHostsUpdate").val(tradairOrgId.map(function (obj) {
            return obj.id
        })).trigger('change')
    });
    $('*[data-action="clearHosts"]').on("click", function () {
        $("#inputHosts, #inputHostsUpdate").val(null).trigger("change")
    });

    // Submit the form
    $("#userForm").submit(function (event) {
        event.preventDefault();
        var formData = {
            header: {
                ownerName: ""
            },
            payload: {
                email: $("#inputEmail").val(),
                userName: $("#inputUserName").val(),
                password: $("#inputPassword").val(),
                salt: "e8455142c8e110be40450e9bfe4d5dbe1104a491dbdd563d",
                firstName: $("#inputFirstName").val(),
                lastName: $("#inputLastName").val(),
                orgId: "",
                workNumber: $("#inputTelephone").val(),
                mobileNumber: $("#inputTelephone").val(),
                enabled: true,
                locked: false,
                loginAttempts: null,
                shortName: null,
                createDate: null,
                updateDate: null,
                screenWidth: null,
                roles: null,
                userId: guid(),
                notifications: null,
                showOnlyOwnData: false,
                desk: null,
                region: null,
                defaultOrderTypeTimeInForce: null,
                defaultOrderTypeTimeInForceQL: null,
                quickLimitShortcutCcPairStr: null,
                positionFilterTypeEnum: null,
                is2fa: false,
                path: "",
                url: orgEnvironments[env].url
            }
        };
        let selectedHosts = $("#inputHosts, #inputHostsUpdate").val();
        let requests = [
            {path: 'v2/user/addNewUser', data: {}},
            {path: 'v2/user/updateUser', data: {}}
        ];

        let i = 0;
        recAllHosts(selectedHosts);

        function recAllHosts(selectedHosts) {
            if (i >= selectedHosts.length) {
                jenkins();
                return
            }
            //assign orgId (i) to formdata, convert to json and put inside requests array
            formData.payload.orgId = selectedHosts[i];
            let sMachine = "";
            tradairOrgId.map(function (obj) {
                if (obj.id === formData.payload.orgId) {
                    sMachine = obj.text;
                }
            });
            formData.header.ownerName = sMachine + '.tradair.com';

            // Deep copy 1
            let formDataClone1 = jQuery.extend(true, {}, formData);

            requests[0].data = formDataClone1;

            // Deep copy 2
            let formDataClone2 = jQuery.extend(true, {}, formData);

            //assign roles for update process, and put the stringified data inside requests array
            formDataClone2.payload.roles = "4,2,30";
            formDataClone2.payload.password = null;
            formDataClone2.payload.salt = "";
            requests[1].data = formDataClone2;

            let k = 0;
            onSuccessAJAX();

            function onSuccessAJAX() {
                $(".consoleLog").show();
                requests[k].data.payload.path = requests[k].path;
                requests[k].data = JSON.stringify(requests[k].data);
                $.ajax({
                    type: "POST",
                    url: apiURL,
                    contentType: "application/json",
                    data: requests[k].data
                }).always(function (data) {
                    // console text: machine name - api path - user email - status message
                    let textForConsole = formData.header.ownerName + " - " + requests[k].path + " - " + JSON.parse(requests[k].data).payload.email + " - " + JSON.parse(data).payload + "<br />";
                    $("#consoleLog").append(textForConsole);
                    initClr();
                    if (JSON.parse(data).payload === "ok") {
                        successHosts.push(formData.header.ownerName);
                        ++k;
                        onSuccessAJAX();
                    }
                    else {
                        ++i;
                        recAllHosts(selectedHosts);
                    }
                });
            }
        }

        // ajax for jenkins job
        function jenkins() {
            let jobURL = "jenkins.tradair.com:8080/job/syncNewUsers";
            let curlStr = "http://" + jobURL + "/buildWithParameters";
            $.ajax({
                url: curlStr,
                type: 'POST',
                dataType: 'text',
                data: {
                    delay: "0sec",
                    token: "yahalimedved",
                    ENVIRONMENT: env,
                    USERNAME: $("#inputUserName").val(),
                    TOHOST: successHosts.toString()
                },
                beforeSend: (xhr) => {
                    xhr.setRequestHeader("Authorization", "Basic " + btoa("remote:Panda230"));
                }
            })
                .done(function () {
                    console.log("success");
                })
                .fail(function () {
                    console.log("error");
                });
        }
    });


    //##########################################################################
    // Populate the Hosts for each Org inside orgEnvironments[environment].data
    // for (let obj in orgEnvironments){
    //     postData.payload.url = orgEnvironments[obj].url;
    //     $.ajax({
    //         type: "POST",
    //         url: apiURL,
    //         contentType: "application/json",
    //         data: JSON.stringify(postData)
    //     }).done(function (data) {
    //         if (JSON.parse(data).error){
    //             console.log("There's an error with the received data for %s :(", obj);
    //             return;
    //         }
    //         let hosts = JSON.parse(data).payload;
    //         let newArr = [];
    //         for (let i = 0; i < hosts.length; i++) {
    //             newArr.push(renameKeys(hosts[i], newKeys));
    //         }
    //         orgEnvironments[obj].data = newArr;
    //     });
    // }
});
