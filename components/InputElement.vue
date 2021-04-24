<template>
    <div class="relative">
        <input 
            :id="labelId"
            :type="inputType?inputType:'text'"
            v-model="inputModel"
            :disabled="disabled?disabled:false"
            :class="{
                'input':true,
                'rounded-xs':true,
                'text-gray-600':true,
                'pl-4':true,
                'pt-4':true,
                'pb-1':true,
                'font-sans':true,
                'focus:outline-none':true,
                'active:outline-none':true,
                'tracking-wide':true,
                'border-b':true,
                'shadow-lg':true,
                'w-full':true,
                'filled':(this.model.length > 0)? true : false,
                }"
        >
        <label
            :for="labelId"
            class="
                absolute
                label 
                mb-0 
                -mt-2
                pt-4 
                pl-4 
                leading-tighter 
                text-gray-400
                text-sm
                mt-2 
                cursor-text
                font-sans
                font-medium
                "
        >
            {{(labelName)?labelName:"Debug"}}
        </label>
        
    </div>
</template>
<script>
export default {
    props:{
        labelName: String,
        labelId: String,
        inputType: String,
        model: String,
        disabled: Boolean,
    },
    computed:{
        inputModel: {
            get(){
                return this.model;
            },
            set(val){
                this.$emit('input', val);
            }
        }
    }
}
</script>
<style>
.input {
        transition: border 0.2s ease-in-out;
    }

.input:focus+.label,
.input:active+.label,
.input.filled+.label {
    font-size: .55rem;
    transition: all 0.2s ease-out;
    top: -0.3rem;
    color: #323232;
}

.label {
    transition: all 0.2s ease-out;
    top: 0.2rem;
    left: 0;
}
</style>