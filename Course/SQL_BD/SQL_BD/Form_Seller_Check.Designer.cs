namespace SQL_BD
{
    partial class Form_Seller_Check
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.components = new System.ComponentModel.Container();
            Microsoft.Reporting.WinForms.ReportDataSource reportDataSource1 = new Microsoft.Reporting.WinForms.ReportDataSource();
            this.reportViewer1 = new Microsoft.Reporting.WinForms.ReportViewer();
            this.Seller_CheckBindingSource = new System.Windows.Forms.BindingSource(this.components);
            this.BD_Shop_4semDataSet = new SQL_BD.BD_Shop_4semDataSet();
            this.Seller_CheckTableAdapter = new SQL_BD.BD_Shop_4semDataSetTableAdapters.Seller_CheckTableAdapter();
            ((System.ComponentModel.ISupportInitialize)(this.Seller_CheckBindingSource)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.BD_Shop_4semDataSet)).BeginInit();
            this.SuspendLayout();
            // 
            // reportViewer1
            // 
            this.reportViewer1.Dock = System.Windows.Forms.DockStyle.Fill;
            reportDataSource1.Name = "DataSet1";
            reportDataSource1.Value = this.Seller_CheckBindingSource;
            this.reportViewer1.LocalReport.DataSources.Add(reportDataSource1);
            this.reportViewer1.LocalReport.ReportEmbeddedResource = "SQL_BD.Seller_Check.rdlc";
            this.reportViewer1.Location = new System.Drawing.Point(0, 0);
            this.reportViewer1.Name = "reportViewer1";
            this.reportViewer1.ServerReport.BearerToken = null;
            this.reportViewer1.Size = new System.Drawing.Size(1298, 291);
            this.reportViewer1.TabIndex = 0;
            // 
            // Seller_CheckBindingSource
            // 
            this.Seller_CheckBindingSource.DataMember = "Seller_Check";
            this.Seller_CheckBindingSource.DataSource = this.BD_Shop_4semDataSet;
            // 
            // BD_Shop_4semDataSet
            // 
            this.BD_Shop_4semDataSet.DataSetName = "BD_Shop_4semDataSet";
            this.BD_Shop_4semDataSet.SchemaSerializationMode = System.Data.SchemaSerializationMode.IncludeSchema;
            // 
            // Seller_CheckTableAdapter
            // 
            this.Seller_CheckTableAdapter.ClearBeforeFill = true;
            // 
            // Form_Seller_Check
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 16F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(1298, 291);
            this.Controls.Add(this.reportViewer1);
            this.Name = "Form_Seller_Check";
            this.Text = "Form1";
            this.Load += new System.EventHandler(this.Form1_Load);
            ((System.ComponentModel.ISupportInitialize)(this.Seller_CheckBindingSource)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.BD_Shop_4semDataSet)).EndInit();
            this.ResumeLayout(false);

        }

        #endregion

        private Microsoft.Reporting.WinForms.ReportViewer reportViewer1;
        private System.Windows.Forms.BindingSource Seller_CheckBindingSource;
        private BD_Shop_4semDataSet BD_Shop_4semDataSet;
        private BD_Shop_4semDataSetTableAdapters.Seller_CheckTableAdapter Seller_CheckTableAdapter;
    }
}