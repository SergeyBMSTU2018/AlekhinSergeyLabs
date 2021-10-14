namespace SQL_BD
{
    partial class Form_Admin_Statistics_Top
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
            this.Admin_Top_prodBindingSource = new System.Windows.Forms.BindingSource(this.components);
            this.BD_Shop_4semDataSet = new SQL_BD.BD_Shop_4semDataSet();
            this.reportViewer1 = new Microsoft.Reporting.WinForms.ReportViewer();
            this.Admin_Top_prodTableAdapter = new SQL_BD.BD_Shop_4semDataSetTableAdapters.Admin_Top_prodTableAdapter();
            ((System.ComponentModel.ISupportInitialize)(this.Admin_Top_prodBindingSource)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.BD_Shop_4semDataSet)).BeginInit();
            this.SuspendLayout();
            // 
            // Admin_Top_prodBindingSource
            // 
            this.Admin_Top_prodBindingSource.DataMember = "Admin_Top_prod";
            this.Admin_Top_prodBindingSource.DataSource = this.BD_Shop_4semDataSet;
            // 
            // BD_Shop_4semDataSet
            // 
            this.BD_Shop_4semDataSet.DataSetName = "BD_Shop_4semDataSet";
            this.BD_Shop_4semDataSet.SchemaSerializationMode = System.Data.SchemaSerializationMode.IncludeSchema;
            // 
            // reportViewer1
            // 
            this.reportViewer1.Dock = System.Windows.Forms.DockStyle.Fill;
            reportDataSource1.Name = "DataSet1";
            reportDataSource1.Value = this.Admin_Top_prodBindingSource;
            this.reportViewer1.LocalReport.DataSources.Add(reportDataSource1);
            this.reportViewer1.LocalReport.ReportEmbeddedResource = "SQL_BD.Admin_Top.rdlc";
            this.reportViewer1.Location = new System.Drawing.Point(0, 0);
            this.reportViewer1.Margin = new System.Windows.Forms.Padding(4, 4, 4, 4);
            this.reportViewer1.Name = "reportViewer1";
            this.reportViewer1.ServerReport.BearerToken = null;
            this.reportViewer1.Size = new System.Drawing.Size(1166, 366);
            this.reportViewer1.TabIndex = 0;
            // 
            // Admin_Top_prodTableAdapter
            // 
            this.Admin_Top_prodTableAdapter.ClearBeforeFill = true;
            // 
            // Form_Admin_Statistics_Top
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 16F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(1166, 366);
            this.Controls.Add(this.reportViewer1);
            this.Margin = new System.Windows.Forms.Padding(4, 4, 4, 4);
            this.Name = "Form_Admin_Statistics_Top";
            this.Text = "Продажи товаров";
            this.Load += new System.EventHandler(this.Form_Admin_Statistics_Top_Load);
            ((System.ComponentModel.ISupportInitialize)(this.Admin_Top_prodBindingSource)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.BD_Shop_4semDataSet)).EndInit();
            this.ResumeLayout(false);

        }

        #endregion

        private Microsoft.Reporting.WinForms.ReportViewer reportViewer1;
        private System.Windows.Forms.BindingSource Admin_Top_prodBindingSource;
        private BD_Shop_4semDataSet BD_Shop_4semDataSet;
        private BD_Shop_4semDataSetTableAdapters.Admin_Top_prodTableAdapter Admin_Top_prodTableAdapter;
    }
}