(function ($) {
    $(function () {
        // -------------------- General Functions
        $('.tabs').tabs();
        $('.modal').modal();
        $('.trigger-modal').modal();
        $('select').formSelect();
        $('.parallax').parallax();
        $('.collapsible').collapsible();
        $('.slider').slider({
            indicators: false,
            }
        );
        // General Functions --------------------

        // -------------------- OpenStack Functions
        $('#delete_instance').attr('disabled', true);
        $('#more_action_instance').attr('disabled', true);
        $('.instance_row_checkbox').click(function() {
            if ($('.instance_row_checkbox:checked').length > 0) {
                $('#delete_instance').removeAttr('disabled');
                $('#more_action_instance').removeAttr('disabled');
            }
            else {
                $('#delete_instance').attr('disabled', true);
                $('#more_action_instance').attr('disabled', true);
            }
        });
        
        $('#confirm_delete_instance').click(function() {
            var arr = $('.instance_row_checkbox:checked').map(function() {
                return this.value;
            }).get();
            $.post(this.action, {
                csrfmiddlewaretoken: document.getElementsByName('csrfmiddlewaretoken')[0].value,
                'instance_ids' : arr,
                'method': 'delete_instances',
            });
            $('#delete_instance').attr('disabled', true);
            $('#more_action_instance').attr('disabled', true);
            return $('.instance_row_checkbox').prop('checked', false);
        });

        $('#confirm_stop_instance').click(function() {
            var arr = $('.instance_row_checkbox:checked').map(function() {
                return this.value;
            }).get();
            $.post(this.action, {
                csrfmiddlewaretoken: document.getElementsByName('csrfmiddlewaretoken')[0].value,
                'instance_ids' : arr,
                'method': 'stop_instances',
            });
            $('#delete_instance').attr('disabled', true);
            $('#more_action_instance').attr('disabled', true);
            return $('.instance_row_checkbox').prop('checked', false);
        });
        
        $('#start_instance').click(function() {
            var arr = $('.instance_row_checkbox:checked').map(function() {
                return this.value;
            }).get();
            $.post(this.action, {
                csrfmiddlewaretoken: document.getElementsByName('csrfmiddlewaretoken')[0].value,
                'instance_ids' : arr,
                'method': 'start_instances',
            });
            $('#delete_instance').attr('disabled', true);
            $('#more_action_instance').attr('disabled', true);
            return $('.instance_row_checkbox').prop('checked', false);
        });

        $('#confirm_soft_reboot_instance').click(function() {
            var arr = $('.instance_row_checkbox:checked').map(function() {
                return this.value;
            }).get();
            $.post(this.action, {
                csrfmiddlewaretoken: document.getElementsByName('csrfmiddlewaretoken')[0].value,
                'instance_ids' : arr,
                'method': 'soft_reboot_instances',
            });
            $('#delete_instance').attr('disabled', true);
            $('#more_action_instance').attr('disabled', true);
            return $('.instance_row_checkbox').prop('checked', false);
        });
        // OpenStack Functions --------------------

        // -------------------- MaaS Functions
        $('#more_action_machine').attr('disabled', true);
        $('.machine_row_checkbox').click(function() {
            if ($('.machine_row_checkbox:checked').length > 0) {
                $('#more_action_machine').removeAttr('disabled');
            }
            else {
                $('#more_action_machine').attr('disabled', true);
            }
        });

        $('#confirm_commission_machine').click(function() {
            var arr = $('.machine_row_checkbox:checked').map(function() {
                return this.value;
            }).get();
            $.post(this.action, {
                csrfmiddlewaretoken: document.getElementsByName('csrfmiddlewaretoken')[0].value,
                'system_ids' : arr,
                'method': 'commission_machines',
            });
            $('#more_action_machine').attr('disabled', true);
            return $('.machine_row_checkbox').prop('checked', false);
        });

        $('#confirm_deploy_machine').click(function() {
            var arr = $('.machine_row_checkbox:checked').map(function() {
                return this.value;
            }).get();
            $.post(this.action, {
                csrfmiddlewaretoken: document.getElementsByName('csrfmiddlewaretoken')[0].value,
                'system_ids' : arr,
                'method': 'deploy_machines',
            });
            $('#more_action_machine').attr('disabled', true);
            return $('.machine_row_checkbox').prop('checked', false);
        });

        $('#confirm_stop_machine').click(function() {
            var arr = $('.machine_row_checkbox:checked').map(function() {
                return this.value;
            }).get();
            $.post(this.action, {
                csrfmiddlewaretoken: document.getElementsByName('csrfmiddlewaretoken')[0].value,
                'system_ids' : arr,
                'method': 'stop_machines',
            });
            $('#more_action_machine').attr('disabled', true);
            return $('.machine_row_checkbox').prop('checked', false);
        });
        // MaaS Functions --------------------
    });
})(jQuery);
  