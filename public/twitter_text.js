define(function (require) {
    let _StringProvider =  function (Private) {
        require('plugins/simple_twitter/twitter_text.css');

        const _ = require('lodash');
        require ('kibana-plugin-lodash-oo-mixin')(_);

        const FieldFormat = Private(require('ui/index_patterns/_field_format/field_format'));



        _.class(_twitterTextFormat).inherits(FieldFormat);
        function _twitterTextFormat(params) {
            _twitterTextFormat.Super.call(this, params);
        }

        _twitterTextFormat.id = 'twitter_text';
        _twitterTextFormat.title = 'Twitter text';
        _twitterTextFormat.fieldType = [
            'string'
        ];

        _twitterTextFormat.prototype._convert = {
            html:function(val) {
                var str = val.replace(/(#\S+)/g, '<span class="hashtag">$1</span>');
                str = str.replace(/(@\S+)/g, '<span class="at">$1</span>');
                return '<span class="tweet-text">'+str+'</span>';
            },
            text:function(val){
                return '42';
            }
        };

        return _twitterTextFormat;
    };

    let fieldFormats = require('ui/registry/field_formats');
    fieldFormats.register(_StringProvider);
    return _StringProvider;
});
