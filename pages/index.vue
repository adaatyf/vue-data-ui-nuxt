<script setup lang="ts">
import {
  type VueUiDonutConfig,
  type VueUiDonutDatasetItem,
  VueUiDonut,
} from "vue-data-ui";
import "vue-data-ui/style.css";

const config = ref<VueUiDonutConfig>({
  useCssAnimation: false,
  style: {
    fontFamily: "Noto Sans HK",
    chart: {
      useGradient: false,
      layout: {
        labels: {
          dataLabels: {
            hideUnderValue: 0,
            useLabelSlots: true,
          },
          percentage: {
            bold: false,
            color: "black",
          },
          name: {
            bold: true,
            color: "#4A4A4A",
          },
          hollow: {
            total: {
              show: false,
            },
            average: {
              show: false,
            },
          },
        },
        donut: {
          strokeWidth: 18,
        },
      },
      legend: {
        show: false,
      },
      tooltip: {
        show: false,
      },
    },
  },
  userOptions: {
    show: false,
  },
});
const dataset = ref<VueUiDonutDatasetItem[]>([
  {
    name: "Series 1",
    values: [10],
    color: "rgb(95,139,238)",
  },
  {
    name: "Series 2",
    values: [10],

    color: "rgb(66,211,146)",
  },
  {
    name: "Series 3",
    values: [10],

    color: "rgb(255,100,0)",
  },
  {
    name: "Target",
    values: [10],

    color: "#404040",
  },
]);
</script>

<template>
  <div>
    <ClientOnly>
      <VueUiDonut :config="config" :dataset="dataset">
        <template
          #dataLabel="{
            datapoint,
            isBlur,
            isVisible,
            isSafari,
            textAlign,
            flexAlign,
            percentage,
          }"
        >
          <div class="data-point-wrap" :class="textAlign" v-if="isVisible">
            <div class="data-point-name">{{ datapoint.name }}</div>
            <div class="data-pct">
              {{ percentage }}
            </div>
          </div>
        </template>
        <template #svg="{ svg }">
          <circle
            :cx="svg.width / 2"
            :cy="svg.height / 2"
            :r="130"
            fill="transparent"
          />
        </template>
      </VueUiDonut>
    </ClientOnly>
  </div>
</template>
<style scoped>
.data-point-name {
  font-size: 14px;
}

.data-pct {
  color: #4a4a4a;
  font-size: 14px;
  font-weight: bold;
}

:deep(.vue-ui-donut-datalabel-slot){
  position: fixed;
}

.data-point-wrap.left {
  padding-left: 10px;
  text-align: left;
}

.data-point-wrap.right {
  padding-right: 10px;
  text-align: right;
}
</style>
