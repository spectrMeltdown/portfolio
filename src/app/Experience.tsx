import { motion } from "motion/react";

export default function Experience() {
  return (
    <div
      id="experience"
      className="my-10 rounded-2xl bg-gray-800 px-10 py-20 shadow-2xl md:px-20"
    >
      <motion.h2
        className="mb-8 text-5xl font-bold"
        initial={{ opacity: 0, y: 70 }}
        transition={{ duration: 0.6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Experience
      </motion.h2>
      <motion.div
        className="rounded-xl border border-gray-600 bg-gray-900/30 p-6"
        initial={{ opacity: 0, y: 70 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="mb-5 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <h3 className="text-2xl font-bold">Odoo ERP Developer</h3>
          <p className="text-sm text-gray-300">2025-2026 (10 months)</p>
        </div>
        <p className="mb-4 text-lg font-semibold">
          Durong&apos;s Malunggay Pandesal
        </p>
        <ul className="list-disc space-y-3 pl-5 text-gray-100">
          <li>
            Developed and customized Odoo ERP modules to align daily operations
            with standardized ERP workflows.
          </li>
          <li>
            Translated business processes into Odoo-compatible flows for better
            consistency in execution and records.
          </li>
          <li>
            Helped reduce manual process friction by centralizing operational
            data and workflow handling in Odoo.
          </li>
        </ul>
      </motion.div>
    </div>
  );
}
